import { AiOutlinePlus } from 'react-icons/ai';

const AddTask = () => {
  return (
    <div>
      <button className="btn btn-primary w-full">
        Add new task
        <AiOutlinePlus className="ml-2" />
      </button>
    </div>
  );
};
export default AddTask;
