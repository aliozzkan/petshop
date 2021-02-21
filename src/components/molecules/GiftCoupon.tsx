import React from 'react'
import Card from 'components/atoms/Card'
import { Box, Flex, Text } from '@chakra-ui/react'
import CopyButton from 'components/atoms/CopyButton'

function GiftCoupon() {
  return (
    <Card borderRadius="md" borderColor="green.300" borderWidth="2px">
      <Flex alignItems="center" justifyContent="space-between" px="3">
        <Box>Icon</Box>
        <Flex flexDir="column" w="100%" ml="5">
          <Text color="gray.500" fontSize="sm">Hediye Çeki Kodu</Text>
          <Text fontWeight="semibold">MQCM782145</Text>
        </Flex>
        <CopyButton text="MQCM782145" />
      </Flex>
    </Card>
  )
}

export default GiftCoupon
