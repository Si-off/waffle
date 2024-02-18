import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({ email: z.string().email(), password: z.string().min(6) });

type FormData = z.infer<typeof schema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data: FormData) => {
    console.log(data);
  });

  return <div>LoginPage</div>;
};

export default LoginPage;
