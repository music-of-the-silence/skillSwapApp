import Skill from "../model/skill.model.js";

export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    console.log("Error fetching skills:", error.message);
    res.status(500).json({ message: error.message });
  }
};
