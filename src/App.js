import DynamicForm from "./components/DynamicForm.tsx";
import { vehicleJsonFormSchema } from "./vehicleJsonFormSchema.tsx";
// import { vehicleJsonFormSchema001 } from "./vehicleJsonFormSchema001.tsx";

function App() {
  return (
    <div >
      <DynamicForm schema={vehicleJsonFormSchema} />
    </div>
  );
}

export default App;
