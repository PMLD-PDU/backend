import { prismaClient } from "../app/database.js";

export const register = async (req, res) => {
  const { name, address } = req.body;
  const countCompany = await prismaClient.company.count({
    where: {
      name: name,
    },
  });
  if (countCompany) {
    return res
      .status(400)
      .json({ message: "nama perusahaan telah dipakai ganti dengan yg unik" });
  }

  const result = await prismaClient.company.create({
    data: { name, address },
    select: {
      id: true,
      name: true,
    },
  });

  return res.status(201).json({
    message: "perusahaan berhasil di daftarkan",
    data: result,
  });
};
