import axios from "axios"

export interface Team {
  _id?: string;
  name: string;
  city: string;
}


export const getAllTeams = async () => {
const ret = await axios.get('http://localhost:5000/teams')
return ret.data as Team[]
}

export const createTeam = async (team: Team) => {
    await axios.post("http://localhost:5000/teams", team);
}