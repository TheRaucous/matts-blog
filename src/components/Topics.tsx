import { IconType } from "react-icons";
import { FaGamepad } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaUnity } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineQueueMusic } from "react-icons/md";
import { HiPencil } from "react-icons/hi2";
import Link from "next/link";

interface Topic {
  icon: IconType;
  name: string;
}

export default function Topics() {

  const topics: Topic[] = [
    { icon: FaCode, name: "Programming" },
    { icon: IoIosFitness, name: "Fitness" },
    { icon: HiPencil, name: "Blogging" },
    { icon: MdOutlineQueueMusic, name: "Music" },
    { icon: FaGamepad, name: "Gaming" },
    { icon: FaUnity, name: "Unity" },
    { icon: SiUnrealengine, name: "Unreal Engine"},
  ];
  console.log()

  return (
    <div className="justify-center flex mb-20 mt-10">
      <div className="max-w-[45rem] flex flex-wrap justify-evenly">
        {topics.map((topic, key) => {
          return (
            <Link key={key} href={""}>
              <div className="p-1 border-2 rounded-3xl shadow-md shadow-c-bg-02 text-center inline-block mt-8 mr-4 ml-4 w-48 h-48 group hover:border-c-theme hover:bg-c-bg-01 c-trans hover:scale-[102%] transition-transform duration-75">
                <div className="flex flex-col h-full justify-evenly group-hover:text-c-theme c-trans">
                  {topic.name}
                  <div className="flex justify-center">
                    <topic.icon className="h-10 w-10 c-trans group-hover:fill-c-theme" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}