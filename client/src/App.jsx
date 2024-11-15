import "./App.css";
import { useForm } from "react-hook-form";
import { get_users, post_user } from "../Components/apiClinet.js";
import { useEffect, useState } from "react";
function App() {
  const { register, handleSubmit } = useForm();
  const [list, setlist] = useState([]);

  const onSubmit = async (data) => {
    const res = await post_user(data);
    console.log(res);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await get_users();
        if (res && res.data) {
          setlist(res.data);
        } else {
          setlist([]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="flex w-[100vw] bg-gradient-to-br  from-white to-cyan-500/40 h-[100vh] items-center justify-around">
      <div className="box w-96 h-96 bg-white p-10 rounded-3xl flex items-center justify-center">
        <form
          className="flex gap-4 p-4 flex-col items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="border  w-full p-4 bg-gradient-to-br from-white to-cyan-500/40"
            placeholder="Name"
            {...register("name")}
            type="text"
          />
          <input
            className="bg-gradient-to-br w-full from-white to-cyan-500/40 p-4"
            placeholder="Age"
            {...register("age")}
            type="number"
          />
          <input
            className="bg-gradient-to-br w-full fromt-white to-cyan-500/40 p-4"
            placeholder="Gender"
            {...register("gender")}
            type="text"
          />

          <div className="faculty flex">
            <input
              name="isfaculty"
              type="checkbox"
              {...register("isfaculty")}
            />
            <label htmlFor="isfaculty">Are you a Faculty?</label>
          </div>
          <button
            className="bg-black text-white px-3 py-2 rounded-3xl"
            type="submit"
            value="Submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="list w-96 h-96 bg-white rounded-3xl flex items-start justify-center">
        <div className="text w-full p-5">
          <h1 className="text-center font-bold">List of Members</h1>
          <ul className="mt-5 flex flex-col gap-4">
            {list.map((user) => (
              <>
                <div className="div flex items-center justify-around">
                  <li className="text-center" key={user.id}>
                    {user.name}
                  </li>
                  <li className="text-center" key={user.id}>
                    {user.gender}
                  </li>
                </div>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
