import { Request, Response } from "express";

class VersionController {
  public async getVersion(req: Request, res: Response) {
    return res.status(200).json({ name: "Aluraflix-API", author: "https://github.com/joaopdsilvadias/", version: "1.0.0" });
  }
}

export default VersionController;