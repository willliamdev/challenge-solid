import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  private createUserUseCase: CreateUserUseCase;
  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    this.createUserUseCase.execute({ name, email });

    return response.status(201).send();
  }
}

export { CreateUserController };
