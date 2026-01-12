import { techStack } from "@/utils/data";

export default function Stack() {
  return (
    <div className="w-full max-w-4xl">
      <h2 className="md:text-xl lg:text-2xl font-bold mb-3">
        I have experience with:
      </h2>
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className={`flex items-center p-2 bg-gray-800 rounded-xl shadow-lg transition transform hover:scale-105 hover:text-${tech.color} hover:cursor-default text-sm`}
          >
            {<tech.icon className="w-5 h-5 lg:w-10 lg:h-10" stroke={1.25} />}
            <span className="">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
