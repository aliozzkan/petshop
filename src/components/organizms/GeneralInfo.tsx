import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Timeline from "components/molecules/Timeline";
import ShipmentCard from "components/molecules/ShipmentCard";
import AskCard from "components/molecules/AskCard";
import StatusMonitor from "components/molecules/StatusMonitor";
import Card from "components/atoms/Card";
import GiftCoupon from "components/molecules/GiftCoupon";

function GeneralInfo() {
  // return (
  //   <StatusMonitor colorScheme="red">

  //   </StatusMonitor>
  // );

  return (
    <Box w="100%" h="100%" bgColor="hepsiback.brokeWhite" p="5">
      <Timeline
        steps={[
          {
            title: "Eskiyi Getir Yenisini Götür başvurusu yapıldı!",
            date: "15 Nisan Salı, 14:37",
          },
          {
            title: "Ürününüzü kargoya teslim etmeniz bekleniyor",
            content: (
              <ShipmentCard />
            ),
          },
          {
            title: "İnceleniyor",
            passive: true,
          },
          {
            title: "Talep Onaylandı",
            passive: true,
            hideDivider: true,
          },
        ]}
      />
    </Box>
  );
}

export default GeneralInfo;
