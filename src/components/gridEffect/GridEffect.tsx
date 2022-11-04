import styles from './GridEffect.module.css';
import { useEffect, useState } from 'react';

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

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

export default function GridEffect() {
  var [windowX, setWindowX] = useState(0);
  // var [windowY, setWindowY] = useState(500);
  var sizeX = Math.round(windowX / (25 + windowX * 0.02));
  var sizeY = clamp(Math.round(12 / (windowX * 0.001)), 14, 22);
  var cellSize = windowX / sizeX; // px
  const grid: Grid = new Grid();

  for (let i = 0; i < sizeX; i++) {
    for (let j = 0; j < sizeY; j++) {
      grid.addCell({ pos: { x: i, y: j }, element: null });
    }
  }

  const handleResize = () => {
    setWindowX(document.body.clientWidth);
  };

  var isInitialized = false;

  useEffect(() => {
    if (!isInitialized) {
      setWindowX(document.body.clientWidth);
    }

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

    const gridContainer = document.getElementById('grid-container');
    gridContainer.style.height = (sizeY * cellSize).toString() + 'px';
    gridContainer.style.width = (sizeX * cellSize).toString() + 'px';

    isInitialized = true;

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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
      setTimeout(() => {
        const cells = getCellsByRange(cell, i);
        if (cells.length > 0) {
          cells.forEach((x) => {
            animateCell(x.element);
          });
          i++;
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
    element.classList.add('bg-transparent');
    setTimeout(() => {
      element.classList.remove('bg-transparent');
    }, 250);
  };

  return (
    <div
      id="grid-container"
      className="bg-gradient-to-tr from-c-theme to-green-500"
    >
      {grid.cells.map((cell) => {
        return (
          <div
            key={`cell-${cell.pos.x}-${cell.pos.y}`}
            id={`cell-${cell.pos.x}-${cell.pos.y}`}
            className="absolute bg-c-bg border-t border-l box-content border-c-brdr transition-colors hover:transition-none hover:bg-transparent duration-[250ms]"
            onClick={() => onCellClicked(cell)}
            contextMenu="false"
          ></div>
        );
      })}
      <div className="absolute top-0 w-full h-[18vw] bg-gradient-to-b from-c-bg pointer-events-none c-trans" />
      <div className="absolute top-0 left-0 h-full w-[20vw] bg-gradient-to-r from-c-bg pointer-events-none c-trans" />
      <div className="absolute top-0 -right-[1px] h-full w-[20vw] bg-gradient-to-l from-c-bg pointer-events-none c-trans" />
      <div className="absolute -bottom-[1px] w-full h-[18vw] bg-gradient-to-t from-c-bg pointer-events-none c-trans" />
    </div>
  );
}
