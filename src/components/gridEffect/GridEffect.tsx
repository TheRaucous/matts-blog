import styles from './GridEffect.module.css';
import { useEffect } from 'react';

class Vector2 {
  x: number;
  y: number;
}

class Cell {
  pos: Vector2;
  element: HTMLElement;
}

class Grid {
  cells: Cell[];

  addCell = (cell: Cell) => {
    this.cells.push(cell);
  };

  constructor() {
    this.cells = [];
  }
}

export default function GridEffect() {
  const sizeX = 30;
  const sizeY = 10;
  const cellSize = 50;
  const grid: Grid = new Grid();

  for (let i = 0; i < sizeX; i++) {
    for (let j = 0; j < sizeY; j++) {
      grid.addCell({ pos: { x: i, y: j }, element: null });
    }
  }

  useEffect(() => {
    addEventListener('resize', () => {
      console.log(window.innerWidth)
    })
    grid.cells.forEach((cell) => {
      const element = document.getElementById(
        `cell-${cell.pos.x}-${cell.pos.y}`
      );
      element.style.left = (cell.pos.x * cellSize).toString() + 'px';
      element.style.top = (cell.pos.y * cellSize).toString() + 'px';
      element.style.width = cellSize.toString() + 'px';
      element.style.height = cellSize.toString() + 'px';
      cell.element = element;
    });
  });

  var canTriggerEffect = true;
  const effectTriggerTimeout = 500;
  const cascadeTime = 75;

  const onCellClicked = (cell: Cell) => {
    if (canTriggerEffect) {
      triggerEffect(cell);
      canTriggerEffect = false;
      setTimeout(() => {
        canTriggerEffect = true;
      }, effectTriggerTimeout);
    }
  };

  const triggerEffect = (cell: Cell) => {
    animateCell(cell.element);

    var i = 1;
    const effect = () => {
      console.log('effect');
      setTimeout(() => {
        const cells = getCellsByRange(cell, i);
        cells.forEach((x) => {
          animateCell(x.element);
        });
        i++;
        console.log(cells.length);
        if (cells.length > 0) {
          effect();
        }
      }, cascadeTime);
    };

    effect();
  };

  const getCellsByRange = (startingCell: Cell, range: number) => {
    return grid.cells.filter((c): boolean => {
      const difY = Math.abs(c.pos.y - startingCell.pos.y);
      const difX = Math.abs(c.pos.x - startingCell.pos.x);
      const dist = Math.sqrt(difX * difX + difY * difY);
      const rd = Math.round(dist);
      return range === rd;
    });
  };

  const animateCell = (element: HTMLElement) => {
    element.classList.add('bg-blue-500');
    setTimeout(() => {
      element.classList.remove('bg-blue-500');
    }, 200);
  };

  return (
    <>
      <div className="relative ">
        {grid.cells.map((cell) => {
          return (
            <div
              key={`cell-${cell.pos.x}-${cell.pos.y}`}
              id={`cell-${cell.pos.x}-${cell.pos.y}`}
              className="absolute -z-50 border border-c-brdr/50 transition-colors duration-200"
              onClick={() => onCellClicked(cell)}
            ></div>
          );
        })}
      </div>
      {/* <div className='relative bg-gradient-to-br from-c-theme to-green-400 w-96 h-96'>
        <div className='absolute'>potato</div>
      </div> */}
    </>
  );
}
