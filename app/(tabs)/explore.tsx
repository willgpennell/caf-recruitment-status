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
const stages: Stage[] = [];

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
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};
