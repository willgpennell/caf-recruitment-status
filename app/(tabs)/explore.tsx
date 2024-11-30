import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import Collapsible from "react-native-collapsible";

type Stage = {
  id: number;
  title: string;
  status: "Complete" | "In Progress" | "Upcoming";
  details: string[];
};

// Dummy data
const stages: Stage[] = [
  {
    id: 1,
    title: "Initial Application",
    status: "Complete",
    details: ["Step 1", "Step 2"],
  },
  {
    id: 2,
    title: "Testing",
    status: "In Progress",
    details: ["Step 1", "Step 2"],
  },
  {
    id: 3,
    title: "Interview",
    status: "Upcoming",
    details: ["Step 1", "Step 2"],
  },
  {
    id: 4,
    title: "Medical Exam",
    status: "Upcoming",
    details: ["Step 1", "Step 2"],
  },
];

const ApplicationProgress = () => {
  // Active ID can either be number or null
  const [activeId, setActiveId] = useState<number | null>(null);

  // Set open details pane
  const toggleDetails = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <View>
      <Text>Canadian Forces Application</Text>
      <FlatList
        data={stages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ApplicationProgress;
