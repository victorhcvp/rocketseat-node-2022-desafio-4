import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    if (typeof user_id === "string") {
      try {
        const users = this.listAllUsersUseCase.execute({ user_id });
        return response.json(users);
      } catch (error) {
        if (error === "user not found") {
          return response.status(404).json({ error });
        }
        return response.status(400).json({ error: "user not admin" });
      }
    }

    return response
      .status(404)
      .json({ error: "user_id not present in headers" });
  }
}

export { ListAllUsersController };
