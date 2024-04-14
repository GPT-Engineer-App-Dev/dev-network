import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { FaCode, FaSearch, FaComments, FaHandshake } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Hero */}
      <Box bg="gray.800" color="white" py={24}>
        <Container maxW="container.lg">
          <Stack spacing={8} align="center" textAlign="center">
            <Heading as="h1" size="3xl">
              Hire Top Web Developers on Particles
            </Heading>
            <Text fontSize="xl">Particles is the leading marketplace for companies to find and hire highly skilled web developers specializing in React, Node.js, .NET, Go, and JavaScript.</Text>
            <Button size="lg" colorScheme="blue">
              View Developer Listings
            </Button>
            <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXJzJTIwd29ya2luZ3xlbnwwfHx8fDE3MTMwNDcxMjd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web developers working" maxW="2xl" mt={12} />
          </Stack>
        </Container>
      </Box>

      {/* Benefits */}
      <Box py={24}>
        <Container maxW="container.lg">
          <Stack spacing={12}>
            <Heading as="h2" size="xl" textAlign="center">
              Why Hire on Particles
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              <Box>
                <Flex color="blue.500" justify="center" mb={4}>
                  <FaCode size="3em" />
                </Flex>
                <Text fontSize="lg" textAlign="center">
                  Access to a curated pool of top web development talent
                </Text>
              </Box>
              <Box>
                <Flex color="blue.500" justify="center" mb={4}>
                  <FaSearch size="3em" />
                </Flex>
                <Text fontSize="lg" textAlign="center">
                  Streamlined hiring process to find the right developers quickly
                </Text>
              </Box>
              <Box>
                <Flex color="blue.500" justify="center" mb={4}>
                  <FaHandshake size="3em" />
                </Flex>
                <Text fontSize="lg" textAlign="center">
                  Flexibility to hire for project-based or full-time roles
                </Text>
              </Box>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* How It Works */}
      <Box bg="gray.50" py={24}>
        <Container maxW="container.lg">
          <Stack spacing={12}>
            <Heading as="h2" size="xl" textAlign="center">
              How It Works
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Stack spacing={8}>
                <Box>
                  <Heading as="h3" size="lg" mb={4}>
                    <Flex align="center">
                      <Text mr={3}>1.</Text> Browse Listings
                    </Flex>
                  </Heading>
                  <Text fontSize="lg">Browse developer listings and filter by technology and location.</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="lg" mb={4}>
                    <Flex align="center">
                      <Text mr={3}>2.</Text> Review Profiles
                    </Flex>
                  </Heading>
                  <Text fontSize="lg">Review developer profiles, skills, and experience.</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="lg" mb={4}>
                    <Flex align="center">
                      <Text mr={3}>3.</Text> Message Developers
                    </Flex>
                  </Heading>
                  <Text fontSize="lg">Message developers directly to discuss opportunities.</Text>
                </Box>
                <Box>
                  <Heading as="h3" size="lg" mb={4}>
                    <Flex align="center">
                      <Text mr={3}>4.</Text> Hire with Confidence
                    </Flex>
                  </Heading>
                  <Text fontSize="lg">Hire developers through Particles and only pay if satisfied.</Text>
                </Box>
              </Stack>
              <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wZXIlMjBtZWV0aW5nfGVufDB8fHx8MTcxMzA1NzQ3N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Web developer meeting" objectFit="cover" borderRadius="lg" />
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box py={24}>
        <Container maxW="container.lg">
          <Stack spacing={8} align="center" textAlign="center">
            <Heading as="h2" size="2xl">
              Start Hiring Top Web Developers Today
            </Heading>
            <Button size="lg" colorScheme="blue">
              View Developer Listings
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
