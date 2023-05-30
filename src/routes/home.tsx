import { Form, Outlet } from "react-router-dom";

export default function Home(): JSX.Element {
  return (
    <header className="grid grid-flow-col grid-cols-2 h-screen w-screen px-32 py-16 gap-8">
      <section className="w-full h-full m-auto bg-emerald-600 rounded-3xl overflow-hidden">
        <h1 className="text-center bg-emerald-700 text-emerald-200">Todo</h1>
        <Form method="POST" className="h-full flex flex-col p-8">
          <label htmlFor="todo" className="text-xl">
            Todo :{" "}
          </label>
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Turn off the stove"
            className="p-4 outline-none bg-emerald-200 text-emerald-900 rounded-lg mb-4 placeholder:text-slate-500"
            required
          />
          <label htmlFor="date" className="text-xl">
            Deadline :{" "}
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="p-4 outline-none bg-emerald-200 text-emerald-900 rounded-lg"
          />
          <input
            type="submit"
            value="Submit"
            className="bg-emerald-700 p-4 my-auto rounded-lg"
          />
        </Form>
      </section>
      <section className="w-full h-full m-auto bg-emerald-200 rounded-3xl overflow-y-scroll flex flex-col">
        <h1 className="text-center bg-emerald-300 text-emerald-600">List</h1>
        <div className="relative h-full overflow-y-scroll flex flex-col px-4 gap-4">
          <Outlet />
        </div>
      </section>
    </header>
  );
}
