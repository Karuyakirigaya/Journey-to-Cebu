const touristSpots = [
    {
        id: 1,
        name: "Santa Fe Beach Club",
        category: "beaches",
        description: "Nestled on Bantayan Island, this pristine white sand beach is renowned for its crystal-clear waters and tranquil atmosphere. It's an ideal destination for sunbathing, swimming, and relaxation.",
        location: "Boracay, Philippines",
        latitude: 11.167382257124205,
        longitude: 123.80545975253565,
        openingHours: [
            { day: "Monday", time: "Open 24 Hours" },
            { day: "Tuesday", time: "Open 24 Hours" },
            { day: "Wednesday", time: "Open 24 Hours" },
            { day: "Thursday", time: "Open 24 Hours" },
            { day: "Friday", time: "Open 24 Hours" },
            { day: "Saturday", time: "Open 24 Hours" },
            { day: "Sunday", time: "Open 24 Hours" }
        ],
        entryFee: "$115-$126",
        contact: {
            phone: "+63 32 438 9090",
            email: ""
        },
        image: "images/Beaches/bantayan-beach.jpg",
        images: [
            "images/Santa Fe Beach/santa-fe-1.jpg",
            "images/Santa Fe Beach/santa-fe-2.jpg",
            "images/Santa Fe Beach/santa-fe-3.jpg",
            "images/Santa Fe Beach/santa-fe-4.jpg"
        ],
        recommendations: [2, 3] //id of other tourist spots

    },
    {
        id: 2,
        name: "Moalboal beach",
        category: "beaches",
        description: "Famous for its vibrant marine life, Moalboal Beach is a popular spot for snorkeling and diving. The beach offers stunning coral reefs and a chance to witness the breathtaking sardine run.",
        location: "MoalBoal, Cebu, Philippines",
        latitude: 9.973955931682726,
        longitude: 123.37218076214884, /*9.973998198425937, 123.37210566029965 */
        openingHours: [
            { day: "Monday", time: "8:00 AM - 6:00PM" },
            { day: "Tuesday", time: "8:00 AM - 6:00PM" },
            { day: "Wednesday", time: "8:00 AM - 6:00PM" },
            { day: "Thursday", time: "8:00 AM - 6:00PM" },
            { day: "Friday", time: "8:00 AM - 6:00PM" },
            { day: "Saturday", time: "8:00 AM - 6:00PM" },
            { day: "Sunday", time: "8:00 AM - 6:00PM" }
        ],
        entryFee: "FREE",
        contact: {
            phone: "None",
            email: "None"
        },
        image: "images/Beaches/moalboal-beach.jpg",
        images: [
            "images/Moalboal/moalboal-1.jpg",
            "images/Moalboal/moalboal-2.jpg",
            "images/Moalboal/moalboal-3.jpg",
            "images/Moalboal/moalboal-4.jpg"

        ],
        recommendations: [1, 3] //id of other tourist spots
    },
    {
        id: 3,
        name: "Lambug Badian Beach",
        category: "beaches",
        description: "Lambug Beach in Badian is a hidden gem, known for its serene environment, white sands, and clear waters.",
        location: "Badian, Cebu, Philippines",
        latitude: 9.853386738670036,
        longitude: 123.36861067669905,
        openingHours: [
            { day: "Monday", time: "Open 24 hours" },
            { day: "Tuesday", time: "Open 24 hours" },
            { day: "Wednesday", time: "Open 24 hours" },
            { day: "Thursday", time: "Open 24 hours" },
            { day: "Friday", time: "Open 24 hours" },
            { day: "Saturday", time: "Open 24 hours" },
            { day: "Sunday", time: "Open 24 hours" },
            // Continue for other days
        ],
        entryFee: "FREE (Bring a few just incase)",
        contact: {
            phone: "+63 912 555 6666",
            email: "info@lambugbeach.com"
        },
        image: "images/Beaches/badian-beach.jpg",
        images: [
            "images/Lambug/lambug-1.jpg",
            "images/Lambug/lambug-2.jpg",
            "images/Lambug/lambug-3.jpg",
            "images/Lambug/lambug-4.jpg"
        ],
        recommendations: [1, 2, 6]
    },
    {
        id: 4,
        name: "Magellan's Cross",
        category: "historical-places",
        description: "Magellan's Cross is a historic symbol of Cebu, marking the arrival of the Spanish and Christianity in the Philippines.",
        location: "Cebu City, Philippines",
        latitude: 10.293553303473184,
        longitude: 123.90195913557812,

        openingHours: [
            { day: "Monday", time: "Open 24 hours" },
            { day: "Tuesday", time: "Open 24 hours" },
            { day: "Wednesday", time: "Open 24 hours" },
            { day: "Thursday", time: "Open 24 hours" },
            { day: "Friday", time: "Open 24 hours" },
            { day: "Saturday", time: "Open 24 hours" },
            { day: "Sunday", time: "Open 24 hours" },
            // Continue for other days
        ],
        entryFee: "Free",
        contact: {
            phone: " +63 78 945 6321",
            email: ""
        },
        image: "images/History/Magellans_cross.jpg",
        images: [
            "images/Magellan/magellan-1.jpg",
            "images/Magellan/magellan-2.jpg",
            "images/Magellan/magellan-3.jpg",
            "images/Magellan/magellan-4.jpg"
        ],
        recommendations: [5, 6]
    },
    {
        id: 5,
        name: "Taoist Temple",
        category: "historical-places",
        description: "The Cebu Taoist Temple is a beautiful and peaceful place for reflection, showcasing traditional Chinese architecture and religious practices.",
        location: "Cebu City, Philippines",
        latitude: 10.33443827600398,
        longitude: 123.88801648279883,
        openingHours: [
            { day: "Monday", time: "8:00 AM - 5:00 PM" },
            { day: "Tuesday", time: "8:00 AM - 5:00 PM" },
            { day: "Wednesday", time: "8:00 AM - 5:00 PM" },
            { day: "Thursday", time: "8:00 AM - 5:00 PM" },
            { day: "Friday", time: "8:00 AM - 5:00 PM" },
            { day: "Saturday", time: "8:00 AM - 5:00 PM" },
            { day: "Sunday", time: "8:00 AM - 5:00 PM" },
            // Continue for other days
        ],
        entryFee: "Free",
        contact: {
            phone: "+63 912 999 0000",
            email: "info@taoisttemple.com"
        },
        image: "images/History/Taoist_temple.jpg",
        images: [
            "images/Taoist/taoist-1.jpg",
            "images/Taoist/taoist-2.jpg",
            "images/Taoist/taoist-3.jpg",
            "images/Taoist/taoist-4.jpg"
        ],
        recommendations: [4, 6]
    },
    {
        id: 6,
        name: "Fort San Pedro",
        category: "historical-places",
        description: "Fort San Pedro is one of the oldest Spanish fortifications in the Philippines, located in Cebu City.",
        location: "Cebu City, Philippines",
        latitude: 10.292683958079195,
        longitude: 123.90560381349286,
        openingHours: [
            { day: "Monday", time: "8:00 AM - 5:00 PM" },
            { day: "Tuesday", time: "8:00 AM - 5:00 PM" },
            { day: "Wednesday", time: "8:00 AM - 5:00 PM" },
            { day: "Thursday", time: "8:00 AM - 5:00 PM" },
            { day: "Friday", time: "8:00 AM - 5:00 PM" },
            { day: "Saturday", time: "8:00 AM - 5:00 PM" },
            { day: "Sunday", time: "8:00 AM - 5:00 PM" },
            // Continue for other days
        ],
        entryFee: "₱30",
        contact: {
            phone: "+63 912 444 5555",
            email: "info@fortsanpedro.com"
        },
        image: "images/History/fort_san_pedro.jpg",
        images: [
            "images/FSP/FSP-1.jpg",
            "images/FSP/FSP-2.jpg",
            "images/FSP/FSP-3.jpg",
            "images/FSP/FSP-4.jpg"
        ],
        recommendations: [4, 5]
    },
    {
        id: 7,
        name: "SM Seaside Cebu",
        category: "activities",
        description: "SM Seaside Cebu is one of the largest shopping malls in the Philippines, featuring retail shops, dining options, and an entertainment complex.",
        location: "Cebu City, Philippines",
        latitude: 10.281868424997741,
        longitude: 123.88058533718186,
        openingHours: [
            { day: "Monday", time: "10:00 AM - 9:00 PM" },
            { day: "Tuesday", time: "10:00 AM - 9:00 PM" },
            { day: "Wednesday", time: "10:00 AM - 9:00 PM" },
            { day: "Thursday", time: "10:00 AM - 9:00 PM" },
            { day: "Friday", time: "10:00 AM - 9:00 PM" },
            { day: "Saturday", time: "10:00 AM - 9:00 PM" },
            { day: "Sunday", time: "10:00 AM - 9:00 PM" },
            // Continue for other days
        ],
        entryFee: "Free",
        contact: {
            phone: "+63 912 123 4567",
            email: "info@smseaside.com"
        },
        image: "images/Activities/sm-seaside.jpg",
        images: [
            "images/Seaside/sm-1.jpg",
            "images/Seaside/sm-2.jpg",
            "images/Seaside/sm-3.jpg",
            "images/Seaside/sm-4.jpg"
        ],
        recommendations: [8, 9]
    },
    {
        id: 8,
        name: "Sinulog Festival",
        category: "activities",
        description: "The Sinulog Festival is a major cultural and religious event in Cebu City, held annually to celebrate Cebu's patron saint, Sto. Niño.",
        location: "Cebu City, Philippines, [NOTE: Location can change]",
        latitude: 10.281868424997741,
        longitude: 123.88058533718186,
        openingHours: [
            { day: "3rd Sunday of January", time: "All Day" },
            
        ],
        entryFee: "Free",
        contact: {
            phone: "+63 912 987 6543",
            email: "info@sinulog.com"
        },
        image: "images/Activities/Sinulog-Festival-in-Cebu.jpg", 
        images: [
            "images/Sinulog/sinulog-1.jpg",
            "images/Sinulog/sinulog-2.jpg",
            "images/Sinulog/sinulog-3.jpg",
            "images/Sinulog/sinulog-4.jpg"
        ],
        recommendations: [7, 9]
    },
    {
        id: 9,
        name: "Anjo World Theme Park",
        category: "activities",
        description: "Anjo World is a fun-filled theme park in Cebu, featuring exciting rides, attractions, and entertainment for all ages.",
        location: "Minglanilla, Cebu, Philippines",
        latitude: 10.248587012456614, 
        longitude: 123.79998275252424,
        openingHours: [
            { day: "Monday", time: "8:00 AM - 5:00 PM" },
            { day: "Tuesday", time: "8:00 AM - 5:00 PM" },
            { day: "Wednesday", time: "8:00 AM - 5:00 PM" },
            { day: "Thursday", time: "8:00 AM - 5:00 PM" },
            { day: "Friday", time: "8:00 AM - 5:00 PM" },
            { day: "Saturday", time: "8:00 AM - 5:00 PM" },
            { day: "Sunday", time: "8:00 AM - 5:00 PM" },
            // Continue for other days
        ],
        entryFee: "₱500-900",
        contact: {
            phone: "+63 912 555 7777",
            email: "info@anjoworld.com"
        },
        image:"images/Activities/Anjo-world.jpg",
        images: [
            "images/Anjo/anjo-1.jpg",
            "images/Anjo/anjo-2.jpg",
            "images/Anjo/anjo-3.jpg",
            "images/Anjo/anjo-4.jpg"
        ],
        recommendations: [7, 8]
    }

];
