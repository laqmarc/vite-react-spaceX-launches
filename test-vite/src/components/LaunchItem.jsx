import { GridItem, Image, Box, Tag } from '@chakra-ui/react';

export function LaunchItem(launch){
    return(
        <GridItem>
            <Box key={launch.launch_date_unix} bg="gray.100" p={4} m={2} borderRadius="md" position="relative">
                <Image src={launch.links.mission_patch_small} width={32}></Image>
                <div className='titlemission'> Mission {launch.mission_name}</div>
                <div className='yearmission'>{launch.launch_year}</div>
                <Tag p={1} colorScheme={launch.launch_success ? "green" : "red"} position="absolute" top="0" right="0">
                {launch.launch_success ? "Success" : "Failure"}
                </Tag>
                <div className='flightnumber'>{ launch.flight_number }</div>
                <div className='launchsite'>From: { launch.launch_site.site_name }</div>
                {/* <div className='details'>{ launch.details ? "Details: " + launch.details : ""}</div> */}
                <div className='rocket'>{ launch.rocket.rocket_name ? "Rocket: " + launch.rocket.rocket_name : ""}</div>
            </Box>
        </GridItem>
    )
}