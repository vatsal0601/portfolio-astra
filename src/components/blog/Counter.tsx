import { useState } from "preact/hooks";
import type { FunctionComponent } from "preact";

const Counter: FunctionComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="rounded-lg border border-zinc-200 p-2 text-center dark:border-zinc-600 lg:p-4">
      <h3>Counter: {counter}</h3>
      <p className="space-x-2 lg:space-x-4">
        <button
          onClick={() => setCounter((counter) => (counter -= 1))}
          className="rounded-lg bg-blue-200 px-4 py-2 font-semibold text-zinc-600 dark:bg-blue-400 dark:text-zinc-900"
        >
          -
        </button>
        <button
          onClick={() => setCounter(0)}
          className="rounded-lg bg-blue-200 px-4 py-2 font-semibold text-zinc-600 dark:bg-blue-400 dark:text-zinc-900"
        >
          Reset
        </button>
        <button
          onClick={() => setCounter((counter) => (counter += 1))}
          className="rounded-lg bg-blue-200 px-4 py-2 font-semibold text-zinc-600 dark:bg-blue-400 dark:text-zinc-900"
        >
          +
        </button>
      </p>
    </div>
  );
};

export default Counter;
