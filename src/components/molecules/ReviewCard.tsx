import React from "react";
import Card from "components/atoms/Card";
import { Text } from "@chakra-ui/react";

function ReviewCard() {
  return (
    <Card>
      <Text>
        Ürününüz alıcı firmaya ulaştıktan sonra incelenecektir. İnceleme
        tamamlandıktan sonra ürününüz uygun görülürse onaylanacak veya
        tarafınıza revize teklif iletilecektir. Ürününüz uygun görülmezse alıcı
        firma tarafından reddedilecektir.
      </Text>
    </Card>
  );
}

export default ReviewCard;
