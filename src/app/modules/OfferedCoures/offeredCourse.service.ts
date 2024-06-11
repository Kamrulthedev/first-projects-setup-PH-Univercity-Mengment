import { TOfferedCoures } from "./offeredCoures.interface";
import { offeredCoures } from "./offeredCoures.model";

const createOfferedCourse = async (payload: TOfferedCoures) => {
  const result = await offeredCoures.create(payload);
  return result;
};

const GetAllOfferedCourse = async () => {
  const result = await offeredCoures.find();
  return result;
};

const GetSIngleOfferedCourse = async (id: string) => {
  const result = await offeredCoures.findById(id);
  return result;
};

const UpadateOfferedCourse = async()=>{
    const result = await offeredCoures.findByIdAndUpdate();
    return result
};

export const OfferedCouresService = {
    createOfferedCourse,
    GetAllOfferedCourse,
    GetSIngleOfferedCourse,
    UpadateOfferedCourse
};