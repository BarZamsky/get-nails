import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { Studio } from "../auth/interfaces/studio.interface";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class StudiosService {
  constructor(@InjectModel('Studio') private studioModel: Model<Studio>) {}

  async getStudioData(studioId: string): Promise<Studio> {
    const studio = await this.studioModel.findOne({_id: studioId});
    if (!studio)
      return null;

    studio._id = null;
    studio["password"] = null;
    return studio;
  }
}
