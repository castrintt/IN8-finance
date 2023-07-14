import { AuthService } from "@service/Auth.service";
import { callToast } from "@utils/toastCall";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type LoginForm = {
  name: string;
  password: string;
};

const UseLoginController = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const authService = new AuthService();
  const navigate = useNavigate();

  const validateNameAndPassword = (data: {
    name: string;
    password: string;
  }) => {
    if (!data.name) {
      callToast("Por favor digite seu nome", "warning");
      return;
    }
    if (!data.password) {
      callToast("Por favor digite sua senha", "warning");
      return;
    }
  };

  const onUserIsAuthenticated = () => {
    callToast("Login concluído com sucesso", "success");
    navigate("/home");
  };

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    validateNameAndPassword(data);
    const authUser = authService.auth({
      Name: data.name,
      Password: data.password,
    });
    if (authUser) {
      onUserIsAuthenticated();
    } else {
      callToast("Usuário ou senha inválido", "error");
    }
  };

  return {
    Actions: {
      onSubmit: handleSubmit(onSubmit),
    },
    Helpers: {
      input: register,
    },
  };
};

export default UseLoginController;
