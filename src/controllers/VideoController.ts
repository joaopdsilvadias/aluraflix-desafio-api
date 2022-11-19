import { Request, Response } from "express";
import prisma from "../database";

class VideoController {
  public async getVideos(req: Request, res: Response) {
    try {
      const videos = await prisma.videos.findMany();
        return res.status(200).json(videos);
    } catch (e) {
        return res.status(500).json({ message: "Internal server error" });
    }
  }

  public async getUniqueVideo(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const video = await prisma.videos.findUnique({
        where: { id: Number(id) },
      });
        return res.status(200).json(video);
    } catch (e) {
        return res.status(500).json({ status: "500", message: "Internal server error" });
    }
  }

  public async createVideo(req: Request, res: Response) {
    const { title, description, url } = req.body;

    try {
      const video = await prisma.videos.create({
        data: { title, description, url },
      });

        return res.status(201).json({ status: 201, message: "Video created", video: video });
    } catch (e) {
        return res.status(500).json({ status: "500", message: "Internal server error" });
    }
  }

  public async updateVideo(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description, url } = req.body;

    try {
      const video = await prisma.videos.update({
        where: { id: Number(id) },
        data: { title, description, url },
      });

        return res.status(200).json({ status: 200, message: "Video updated", video: video });
    } catch (e) {
        return res.status(500).json({ status: "500", message: "Internal server error" });
    }
  }

  public async deleteVideo(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await prisma.videos.delete({
          where: {
            id: Number(id) }, 
        });

        return res.status(200).json({ status: 200, message: "Video deleted" });
    } catch (e) {
        return res.status(500).json({ status: "500", message: "Internal server error" });
    }
  }
}

export default VideoController;
