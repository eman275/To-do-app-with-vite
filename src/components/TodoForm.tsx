import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { useStore } from '../store/todosStore';
import { Button } from 'reactstrap';

const schema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters long" }).nonempty({ message: "Title is required" }),
});

type FormData = {
  title: string;
};

const TodoForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema)
  });
  const addTodo = useStore(state => state.addTodo);

  const onSubmit: SubmitHandler<FormData> = data => {
    addTodo(data.title);
    reset();
    toast.success('Todo added successfully!');
  };

  return (
    <div style={{marginBottom: "20px"}}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('title')} placeholder="Add new todo" />
      {errors.title && <p>{errors.title.message}</p>}
      <Button type="submit"     color="primary"
 style={{marginLeft: "15px"}}>Submit</Button>
    </form>
    </div>
  );
};

export default TodoForm;
