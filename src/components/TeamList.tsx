import React, { useEffect, useState } from "react";
import { Team, getAllTeams } from "../service/team.service";
import { List } from "antd";


export default function TeamList() {
  const [teams, setTeams] = useState<Team>([]);
  console.log(teams);
  
  useEffect(() => {
    getAllTeams().then((ret) => setTeams(ret));
  }, []);
  
  return ( 
    <List>
      <List.Item key={Team._id}>
      <h2>{Team.name}</h2>
      <h4>{Team.city}</h4>
      </List.Item>
    </List>
  )
}

