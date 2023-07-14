import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserService } from "@service/User.service";
import { callToast } from "@utils/toastCall";

type RegisterForm = {
  name: string;
  password: string;
  confirmPassword: string;
};

const UseRegisterController = () => {
  const userService = new UserService();
  const { register, handleSubmit } = useForm<RegisterForm>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterForm> = (data) => {
    if (data.password !== data.confirmPassword) {
      callToast("As senhas não conferem", "warning");
      return;
    }
    const createUser = userService.createUser({
      Name: data.name,
      Password: data.password,
      Finances: [],
    });
    if (createUser) {
      callToast("Usuário registrado com sucesso", "success");
      navigate("/");
    } else {
      callToast("Ocorreu um erro inesperado", "error");
    }
  };

  return {
    Actions: {
      onSubmit: handleSubmit(onSubmit),
    },
    Register: {
      input: register,
    },
  };
};

export default UseRegisterController;
