import { Router } from "express";

import VideoController from "../controllers/VideoController";
import VersionController from "../controllers/VersionController";

const routes = Router();

routes.get('/', new VersionController().getVersion);

routes.get('/videos', new VideoController().getVideos);
routes.post('/videos', new VideoController().createVideo);
routes.get('/videos/:id', new VideoController().getUniqueVideo);
routes.patch('/videos/:id', new VideoController().updateVideo);
routes.delete('/videos/:id', new VideoController().deleteVideo);

export default routes;