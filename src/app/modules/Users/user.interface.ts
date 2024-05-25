import { Model, Schema, model } from 'mongoose';




//create a Type or interface
export type TUser = {
    id:string,
    password:string,
    needsPasswordChange:boolean,
    role:'students' | 'admin' | 'faculty',
    status:'in-progress' | 'blocked',
    isDeleted: boolean,
};

