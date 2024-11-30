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
    details: [
      "Application Received",
      "Application Under Review",
      "Application Reviewed",
    ],
  },
  {
    id: 2,
    title: "Testing",
    status: "In Progress",
    details: [
      "Force Test is 2024-09-22 at 2:30 PM",
      "Bring gym clothes and water bottle",
      "Force Test Consists of:",
      "30x Sandbag lift within - 3 mins, 30 secs",
      "Loaded and Unloaded Shuttle Run - 5 mins, 21 secs",
      "200lbs drag - No Time Limit",
    ],
  },
  {
    id: 3,
    title: "Interview",
    status: "Upcoming",
    details: ["Your interview has not been scheduled, please wait"],
  },
  {
    id: 4,
    title: "Medical Exam",
    status: "Upcoming",
    details: [
      "Your medical has not been scheduled, please wait",
      "You will be tested on vision, colour vision and a hearing test.",
    ],
  },
  {
    id: 5,
    title: "Interview",
    status: "Upcoming",
    details: ["Your final interview has not been scheduled, please wait"],
  },
  {
    id: 6,
    title: "Swear-In",
    status: "Upcoming",
    details: ["You're swear in has not been scheduled, please wait"],
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
    <View style={styles.container}>
      <Text style={styles.title}>Canadian Forces Application 🍁</Text>
      <FlatList
        data={stages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const cardStyle = [
            styles.card,
            item.status === "Complete"
              ? styles.complete
              : item.status === "In Progress"
              ? styles.inProgress
              : styles.pending,
          ];
          const detailsStyle = [
            styles.detailsContainer,
            item.status === "Complete"
              ? styles.detailsComplete
              : item.status === "In Progress"
              ? styles.detailsInProgress
              : styles.detailsPending,
          ];
          return (
            <View>
              <TouchableOpacity
                style={cardStyle}
                onPress={() => toggleDetails(item.id)}
              >
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardStatus}>{item.status}</Text>
              </TouchableOpacity>
              <Collapsible collapsed={activeId !== item.id}>
                <View style={detailsStyle}>
                  {item.details.map((detail, index) => (
                    <View key={index} style={styles.listItem}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.listText}>{detail}</Text>
                    </View>
                  ))}
                </View>
              </Collapsible>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F9FA",
  },
  title: {
    fontSize: 20,
    marginTop: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#E8EAF6",
    borderRadius: 8,
  },
  complete: {
    backgroundColor: "#C8E6C9", // Light green for "Complete"
  },
  inProgress: {
    backgroundColor: "#FFECB3", // Light yellow for "In Progress"
  },
  pending: {
    backgroundColor: "#F0F0F0", // grey
  },
  detailsComplete: {
    backgroundColor: "#dfebdf", // Lighter green for "Complete"
  },
  detailsInProgress: {
    backgroundColor: "#f7f1dc", // Lighter yellow for "In Progress"
  },
  detailsPending: {
    backgroundColor: "#F0F0F0", // grey
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardStatus: {
    fontSize: 14,
    color: "#757575",
  },
  detailsContainer: {
    padding: 15,
    backgroundColor: "#F1F8E9",
    marginBottom: 10,
    borderRadius: 8,
  },
  detailsText: {
    fontSize: 14,
    color: "#616161",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  bullet: {
    fontSize: 16,
    marginRight: 10,
    color: "#616161",
  },
  listText: {
    fontSize: 14,
    color: "#616161",
    paddingRight: 30,
  },
});

export default ApplicationProgress;
