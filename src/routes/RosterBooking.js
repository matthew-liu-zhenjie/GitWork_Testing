import { supabase } from "../supabaseClient";

import Button from "@mui/material/Button";

async function insertWorker() {
  // perform check to see if user alr has worker is already in database
  let { data: potential_worker, error } = await supabase
    .from("ManagerWorkerTable")
    .select("*")
    .eq("Worker Name", "Bob")
    .eq("Manager ID", supabase.auth.user().id);

  console.log(potential_worker);
  console.log(error);

  if (potential_worker.length === 0) {
    // if worker doesnt exist yet
    // if no worker with above conditions
    const { data, error } = await supabase.from("ManagerWorkerTable").insert([
      {
        "Worker Name": "Bob", // later this one shld be user input to add user
        "Manager ID": supabase.auth.user().id // get the id of the acc user
      }
    ]);
    console.log(data);
    console.log(error);
  } else {
    alert("Error: Worker already exists! (Worker names must be unique)");
  }
}

// delete worker (maybe can add an "are you sure" / confirmation thingy too)
async function deleteWorker() {
  const { data, error } = await supabase
    .from("ManagerWorkerTable")
    .delete()
    .eq("Worker Name", "Bob")
    .eq("Manager ID", supabase.auth.user().id);

  console.log("Bob has been PURGED!");
}

export default function roster() {
  return (
    <>
      <div className="roster">
        <h1> Todo.... Add new worker functionality </h1>
      </div>

      <Button variant="contained" size="small" onClick={insertWorker}>
        Click me! to get bob
      </Button>
      <br></br>
      <br></br>
      <Button
        variant="contained"
        size="small"
        color="error"
        onClick={deleteWorker}
      >
        Click me! to purge bob
      </Button>
    </>
  );
}
