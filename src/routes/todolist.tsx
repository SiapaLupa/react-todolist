import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoaderData } from "react-router-dom";

export default function TodoList(): JSX.Element {
  const todos: Record<string, string>[] = useLoaderData();
  const dates = new Set<string>();
  todos.forEach((todo) => {
    dates.add(todo.date);
  });
  return (
    <>
      {Array.from(dates)
        .sort()
        .map((date: string, index: number) => {
          return (
            <div
              key={index}
              className={"bg-emerald-100 text-black p-4 rounded-lg ".concat(
                index === Array.from(dates).length - 1 ? "mb-8" : "mb-0"
              )}
            >
              <h1 className="text-xl sticky top-0 bg-emerald-200 p-4 text-center rounded-md">
                Deadline :{" "}
                {new Intl.DateTimeFormat(undefined, {
                  dateStyle: "full",
                }).format(new Date(date))}
              </h1>
              {todos.map((todo, index: number) => {
                if (todo.date === date) {
                  return (
                    <div
                      className="p-4 flex items-center hover:bg-sky-200 [&>svg]:opacity-20 hover:[&>svg]:opacity-100"
                      key={index}
                    >
                      <p className="mr-auto">{todo.todo}</p>
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="p-4 text-green-500 "
                      />
                      <FontAwesomeIcon
                        icon={faXmark}
                        className="p-4 text-red-500 "
                      />
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
    </>
  );
}
