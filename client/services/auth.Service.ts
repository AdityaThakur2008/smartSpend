import Api from "@/lib/axios";
import { LoginInput, RegisterInput } from "@/Validator/auth.Validator";

class AuthService {
  async register(data: RegisterInput) {
    const response = await Api.post("/auth/register", data);
    return response.data;
  }

  async login(data: LoginInput) {
    const response = await Api.post("/auth/login", data);
    return response.data.data;
  }

  async logout() {
    const response = await Api.post("/auth/logout");
    return response.data;
  }

  async getCurrentUser() {
    const response = await Api.get("/auth/me");
    return response.data.data;
  }
}

const authService = new AuthService()

export default authService;