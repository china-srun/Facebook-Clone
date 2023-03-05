// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

async function createUserService(UserName: string, img: any) {}
async function getAllUserService() {}
async function getUserByIdService(id: string) {}
async function deleteUserService(id: string) {}
async function getUserByName(name: string) {}
async function updateUserService(id: string, name: string, imgUrl: string) {}
export default {
  createUserService,
  getAllUserService,
  getUserByIdService,
  deleteUserService,
  updateUserService,
  getUserByName,
};
