import React, { useState, useEffect } from "react";
import "../css/map.css";
import { AiOutlineSearch } from "react-icons/ai";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { Icon, divIcon, point } from "leaflet";

const customIcon = new Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconSize: [20, 20],
});

const Map = () => {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const [cityCoordinates, setCityCoordinates] = useState([19.07, 72.822]);
  const [req, setReq] = useState(false);
  const [mapKey, setMapKey] = useState(0);

  const handleClick = async () => {
    setReq(!req);
    setData(data2);
    if (location !== "") {
        const apiKey = "608796d36c114ccc8789a200c808c78b";
        const encodedLocation = encodeURIComponent(location);
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodedLocation}&key=${apiKey}`;

        try {
          const response = await axios.get(apiUrl);
          const firstResult = response.data.results[0];
          if (firstResult) {
            const { lat, lng } = firstResult.geometry;
            setCityCoordinates([lat, lng]);
            setMapKey(mapKey + 1);
          } else {
            alert("Location not found for the given city.");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
      const fetchData = async () => {
        if (location !== "") {
          alert("location is added", location);
          const serpapiUrl = `http://serpapi.com/search.json?engine=google_local&q=legal+advisor+in+mumbai&location=Mumbai%2C+Maharashtra%2C+India&google_domain=google.co.in&gl=in&hl=en&api_key=5d1b79b4ee809fa8365d09f2d36a866dda3b7e1e2f93ad1c59726eff1454f4f2`;
          try {
            const response = await fetch(serpapiUrl,{ mode: 'no-cors' });
            // if (!response.ok) {
            //   throw new Error("Network response was not ok");
            // }
            const data = await response.json();
            setData(data);
            console.log(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
      };
      fetchData();
  };

  const data2 = {
    search_metadata: {
      id: "64f7f9fbeb690f282262aafe",
      status: "Success",
      json_endpoint:
        "https://serpapi.com/searches/4d80ee3939661e72/64f7f9fbeb690f282262aafe.json",
      created_at: "2023-09-06 04:03:07 UTC",
      processed_at: "2023-09-06 04:03:07 UTC",
      google_local_url:
        "https://www.google.com/search?q=advocates+in+mumbai&hl=en&gl=us&tbm=lcl",
      raw_html_file:
        "https://serpapi.com/searches/4d80ee3939661e72/64f7f9fbeb690f282262aafe.html",
      total_time_taken: 0.61,
    },
    search_parameters: {
      engine: "google_local",
      q: "advocates in mumbai",
      google_domain: "google.com",
      hl: "en",
      gl: "us",
      device: "desktop",
    },
    local_results: [
      {
        position: 1,
        rating: 4.8,
        reviews_original: "(66)",
        reviews: 66,
        place_id: "2753416490187483577",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=2753416490187483577&q=advocates+in+mumbai",
        lsig: "AB86z5UelP5A-XEpFfDyseAqFPXo",
        provider_id: "/g/11gjmtx6z7",
        gps_coordinates: {
          latitude: 19.1177574,
          longitude: 72.8736839,
        },
        service_options: {
          onsite_services_not_available: true,
        },
        links: {
          website: "https://www.panindiaadvocate.com/",
          directions:
            "https://www.google.com/maps/dir//Advocate+in+Mumbai+%7C+Lawyer+in+Mumbai+%7C+Best+Advocate+in+Mumbai,+Andheri+East,+Mumbai,+Maharashtra,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c90686d58b23:0x263619b5a853e9b9?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIBhAA",
        },
        title:
          "Advocate in Mumbai | Lawyer in Mumbai | Best Advocate in Mumbai",
        type: "Attorney",
        address: "Mumbai, Maharashtra, India",
        years_in_business: "20+ years in business",
        phone: "+91 98335 09486",
        hours: "Open 24 hours",
      },
      {
        position: 2,
        rating: 4.8,
        reviews_original: "(438)",
        reviews: 438,
        place_id: "11473077322652876647",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=11473077322652876647&q=advocates+in+mumbai",
        lsig: "AB86z5XazQYjSOKDx0kSj9GXE-NV",
        provider_id: "/g/11b8b3l2hv",
        gps_coordinates: {
          latitude: 19.1202582,
          longitude: 72.8461339,
        },
        service_options: {
          onsite_services: true,
          online_appointments: true,
        },
        links: {
          website: "https://www.advocateshah.com/",
          directions:
            "https://www.google.com/maps/dir//605,+Chirag+Shah+%26+Co.,+Advocates+%26+Solicitors,+Pearl+Plaza,+next+to+McDonalds,+opp.+Andheri+Railway+Station,+Andheri+West,+Mumbai,+Maharashtra+400058,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c9626266791b:0x9f388f09b9507f67?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIFBAA",
        },
        title: "Chirag Shah & Co., Advocates & Solicitors",
        type: "Real estate attorney",
        address:
          "605, Pearl Plaza, next to McDonalds, opp. Andheri Railway Station",
        years_in_business: "15+ years in business",
        phone: "+91 88980 50051",
        hours: "Open 24 hours",
      },
      {
        position: 3,
        rating: 4.9,
        reviews_original: "(138)",
        reviews: 138,
        place_id: "15098146144526302224",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=15098146144526302224&q=advocates+in+mumbai",
        lsig: "AB86z5WD6OJ3krCOOmcC410mK9pn",
        provider_id: "/g/119w7_6x2",
        gps_coordinates: {
          latitude: 19.0938876,
          longitude: 72.9002228,
        },
        service_options: {
          onsite_services: true,
          online_appointments: true,
        },
        links: {
          directions:
            "https://www.google.com/maps/dir//Advocate+Amit+Pai+%26+Associates,+Near+Abhishek+hospital,+7%2F4,+sahajeevan+Chs,+near+saraswat+bank,+Bhatwadi,+Barve+Nagar,+Ghatkopar+West,+Mumbai,+Maharashtra+400084,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c7ce55555513:0xd18763eccf6c7c10?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIBBAA",
        },
        title: "Advocate Amit Pai & Associates",
        type: "Lawyers association",
        address:
          "Near Abhishek hospital, 7/4, sahajeevan Chs, near saraswat bank",
        phone: "+91 98921 44086",
        hours: "Open ⋅ Closes 7:30 PM",
      },
      {
        position: 4,
        place_id: "12796559016828723169",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=12796559016828723169&q=advocates+in+mumbai",
        lsig: "AB86z5VRDD1dxBN_x_KMHhXq624S",
        provider_id: "/g/11swcghrqh",
        gps_coordinates: {
          latitude: 19.176394,
          longitude: 72.8667231,
        },
        links: {
          website: "https://advsavitamalkampate.com/",
          directions:
            "https://www.google.com/maps/dir//Adv.+SAVITA+MALKAMPATE+(High+Court+Advocate+%26+NOTARY+PUBLIC),+A-001,+Gr.+Flr,+Saryu+Chs,+Bldg+No.+9,+Film+City+Rd,+near+Dindoshi+Court,+behind+Bank+of+India,+Suchi+Dham,+Malad+East,+Mumbai,+Maharashtra+400097,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7b729d6db05a3:0xb19682a07165dfe1?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIExAA",
        },
        title: "Adv. SAVITA MALKAMPATE (High Court Advocate & NOTARY PUBLIC)",
        reviews_original: "No reviews",
        type: "Notary public",
        address:
          "A-001, Gr. Flr, Saryu Chs, Bldg No. 9, Film City Rd, near Dindoshi Court, behind Bank of India",
        phone: "+91 98214 82519",
        hours: "Open ⋅ Closes 8 PM",
      },
      {
        position: 5,
        rating: 4.7,
        reviews_original: "(103)",
        reviews: 103,
        place_id: "10720190547119886669",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=10720190547119886669&q=advocates+in+mumbai",
        lsig: "AB86z5WbtXHje1dlQuI0bAqeKkzl",
        provider_id: "/g/11bzvy_7jw",
        gps_coordinates: {
          latitude: 19.2055021,
          longitude: 72.85175559999999,
        },
        service_options: {
          onsite_services: true,
          online_appointments: true,
        },
        links: {
          website: "http://www.mkslegalassociates.com/",
          directions:
            "https://www.google.com/maps/dir//MKS+Legal+Associates+I+Divorce,+Maintenance,+DV,+498A-FamilyI+Criminal+l+Civil+l+High+Court+l+Best%2FTop+Advocate%2FLawyer+Mumbai,+Railway+Station,+E-8,+3rd+Floor,+Nemikrishna+CHS+V.+L.+Road,+opp.+Bajaj+School,+near+Kandivali,+Kandivali+West,+Mumbai,+Maharashtra+400067,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7b6c5f6f3b5db:0x94c5c4812d94d14d?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIEhAA",
        },
        title:
          "MKS Legal Associates I Divorce, Maintenance, DV, 498A-FamilyI Criminal l Civil l High Court l Best/Top Advocate/Lawyer Mumbai",
        type: "Law firm",
        address:
          "Railway Station, E-8, 3rd Floor, Nemikrishna CHS V. L. Road, opp. Bajaj School, near Kandivali",
        years_in_business: "10+ years in business",
        phone: "+91 90040 40633",
        hours: "Opens soon ⋅ 10 AM",
      },
      {
        position: 6,
        rating: 4.9,
        reviews_original: "(79)",
        reviews: 79,
        description: '"Advocate Deepak Agnihotri is our family lawyer."',
        place_id: "14289208329069546013",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=14289208329069546013&q=advocates+in+mumbai",
        lsig: "AB86z5WR5xlqfnk9vTRSO8RxpuWY",
        provider_id: "/g/11h4tn5031",
        gps_coordinates: {
          latitude: 19.117860999999998,
          longitude: 72.9051401,
        },
        links: {
          website: "https://www.deepakagnihotri.com/",
          directions:
            "https://www.google.com/maps/dir//Advocate+Deepak,+107,+Ground+Floor,+Hira+Panna+Shopping+Complex,+MHADA+Colony,+Powai,+Mumbai,+Maharashtra+400076,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c73e4938e029:0xc64d77448fbe4a1d?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIERAA",
        },
        title: "Advocate Deepak",
        type: "Criminal justice attorney",
        address: "107, Ground Floor, Hira Panna Shopping Complex",
        years_in_business: "3+ years in business",
        phone: "+91 98194 85845",
        hours: "Open ⋅ Closes 8:30 PM",
      },
      {
        position: 7,
        rating: 5.0,
        reviews_original: "(83)",
        reviews: 83,
        description:
          '"I am very much impressed by Advocate Prem & his associates."',
        place_id: "725263620248023449",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=725263620248023449&q=advocates+in+mumbai",
        lsig: "AB86z5W-bVpSV6B2oQQC6eR34bG3",
        provider_id: "/g/11bwmw7s1b",
        gps_coordinates: {
          latitude: 18.929861,
          longitude: 72.832313,
        },
        links: {
          website: "https://advocateprem.com/",
          directions:
            "https://www.google.com/maps/dir//Prem+Kumar+%26+Associates,+Prakash+Chamber,+SP-8,+SP+Business+Center,+2nd+Floor,+77+Mumbai-400001,+Nagindas+Master+Rd,+Kala+Ghoda,+Fort,+Mumbai,+Maharashtra+400001,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7d1c315492931:0xa10a76b8565b199?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIEBAA",
        },
        title: "Prem Kumar & Associates",
        type: "Criminal justice attorney",
        address:
          "Prakash Chamber, SP-8, SP Business Center, 2nd Floor, 77 Mumbai-400001, Nagindas Master Rd",
        years_in_business: "7+ years in business",
        phone: "+91 93242 48000",
        hours: "Open ⋅ Closes 7:30 PM",
      },
      {
        position: 8,
        rating: 5.0,
        reviews_original: "(38)",
        reviews: 38,
        description: '"Excellent service by Advocate Vaibhav."',
        place_id: "5461348272533391002",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=5461348272533391002&q=advocates+in+mumbai",
        lsig: "AB86z5V-Aah4oGibWcvtqUqXCuJu",
        provider_id: "/g/11c6qd_ksq",
        gps_coordinates: {
          latitude: 19.017827999999998,
          longitude: 72.845781,
        },
        links: {
          website: "http://www.vaibhavchaudhari.net/",
          directions:
            "https://www.google.com/maps/dir//Vaibhav+Chaudhari+%26+Co.+Advocates,+Plot+No.+30,+Laxmi+Krupa+CHSL,+Lokmanya+Tilak+Colony,+Dadar+East,,+Mumbai,+Maharashtra+400014,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7cedea722d791:0x4bca9b51830bc69a?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIDxAA",
        },
        title: "Vaibhav Chaudhari & Co. Advocates",
        type: "Legal services",
        address:
          "Plot No. 30, Laxmi Krupa CHSL, Lokmanya Tilak Colony, Dadar East,",
        years_in_business: "7+ years in business",
        phone: "+91 98511 11661",
        hours: "Opens soon ⋅ 10 AM",
      },
      {
        position: 9,
        rating: 4.7,
        reviews_original: "(119)",
        reviews: 119,
        place_id: "18340917450842085048",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=18340917450842085048&q=advocates+in+mumbai",
        lsig: "AB86z5VDjTPqXNmbCyIbBtJgOFT_",
        provider_id: "/g/1ptvr3hzn",
        gps_coordinates: {
          latitude: 19.128107200000002,
          longitude: 72.8417209,
        },
        service_options: {
          onsite_services: true,
          online_appointments: true,
        },
        links: {
          website: "http://www.advocateaniketnerurkar.com/",
          directions:
            "https://www.google.com/maps/dir//24,+Advocate+Aniket+Nerurkar,+Sai+Estate,+Ceasar+Rd,+opp.+IDBI+Bank,+Amboli,+Andheri+West,+Mumbai,+Maharashtra+400058,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7b6282446bae1:0xfe88073f483496b8?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIDhAA",
        },
        title: "Advocate Aniket Nerurkar",
        type: "Real estate attorney",
        address: "24, Sai Estate, Ceasar Rd, opp. IDBI Bank",
        years_in_business: "15+ years in business",
        phone: "+91 97681 35352",
        hours: "Open 24 hours",
      },
      {
        position: 10,
        rating: 4.6,
        reviews_original: "(47)",
        reviews: 47,
        description:
          '"Adv seema has patience and for an advocate that’s rare."',
        place_id: "8721511055436096798",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=8721511055436096798&q=advocates+in+mumbai",
        lsig: "AB86z5Vwz7f6g3BmnX4aOdtlgmpt",
        provider_id: "/g/11np836nfd",
        gps_coordinates: {
          latitude: 19.059314999999998,
          longitude: 72.90687299999999,
        },
        links: {
          website: "http://www.advseemaraut.com/",
          directions:
            "https://www.google.com/maps/dir//Advocate+Seema+Raut+-+Best+Divorce+%7C+Criminal+%7C+Consumer+Cases+%7C+Cheque+Bounce+Cases+%7C+Bail+Matters+Lawyer+in+Chembur,+Mumbai,+Office+No+-04,+SGM+Tower,+Narayan+Gajanan+Acharya+Marg,+Chembur,+Mumbai,+Maharashtra+400071,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c7248e6e931d:0x79090818abe9251e?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIDBAA",
        },
        title:
          "Advocate Seema Raut - Best Divorce | Criminal | Consumer Cases | Cheque Bounce Cases | Bail Matters Lawyer in Chembur, Mumbai",
        type: "Attorney",
        address: "Office No -04, SGM Tower, Narayan Gajanan Acharya Marg",
        phone: "+91 91368 99679",
        hours: "Opens soon ⋅ 10 AM",
      },
      {
        position: 11,
        rating: 4.5,
        reviews_original: "(24)",
        reviews: 24,
        place_id: "10163567991457029454",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=10163567991457029454&q=advocates+in+mumbai",
        lsig: "AB86z5XpHmEEh_tSTGQuRvAPHMct",
        provider_id: "/g/11b69zzw1z",
        gps_coordinates: {
          latitude: 19.2108249,
          longitude: 72.8305774,
        },
        service_options: {
          onsite_services: true,
          online_appointments: true,
        },
        links: {
          directions:
            "https://www.google.com/maps/dir//SN+Legal+Advocates+%26+Solicitor,+Office+No.+28,+Rock+Enclave+CHS,+near+Hindustan+Naka,+opp.+ICICI+Bank,+Charkop,+Kandivali+West,+Mumbai,+Maharashtra+400067,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7b6cbf2c00001:0x8d0c3f3d45539d4e?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIDRAA",
        },
        title: "SN Legal Advocates & Solicitor",
        type: "Law firm",
        address:
          "Office No. 28, Rock Enclave CHS, near Hindustan Naka, opp. ICICI Bank",
        years_in_business: "20+ years in business",
        phone: "+91 97697 60940",
        hours: "Open ⋅ Closes 9 PM",
      },
      {
        position: 12,
        rating: 4.9,
        reviews_original: "(163)",
        reviews: 163,
        description: '"Satisfactory advised."',
        place_id: "9963934902914284808",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=9963934902914284808&q=advocates+in+mumbai",
        lsig: "AB86z5VvUUmBb78ykhXGZXeO7Gqk",
        provider_id: "/g/11j8rlppcd",
        gps_coordinates: {
          latitude: 19.0737363,
          longitude: 72.87809969999999,
        },
        links: {
          directions:
            "https://www.google.com/maps/dir//Advocate+Rohan+Venkatesh+Yemul,+Mahendra+Azad+Singh+Chawl,+new+mill+road+sambhaji+chowk+ram+bahadhur,+Kurla+West,+Mumbai,+Maharashtra+400070,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c9d264802065:0x8a470200c5527d08?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIChAA",
        },
        title: "Advocate Rohan Venkatesh Yemul",
        type: "Law firm",
        address:
          "Mahendra Azad Singh Chawl, new mill road sambhaji chowk ram bahadhur",
        years_in_business: "3+ years in business",
        phone: "+91 97737 95904",
        hours: "Open ⋅ Closes 11 PM",
      },
      {
        position: 13,
        rating: 4.8,
        reviews_original: "(181)",
        reviews: 181,
        description: '"Very professional and work excellant..."',
        place_id: "11051746774329782394",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=11051746774329782394&q=advocates+in+mumbai",
        lsig: "AB86z5VePd3KcZ-FAKrubTM7fOwx",
        provider_id: "/g/11cp5jfw05",
        gps_coordinates: {
          latitude: 19.172782299999998,
          longitude: 72.85340889999999,
        },
        links: {
          directions:
            "https://www.google.com/maps/dir//Shop+No-3a,+Advocate+Ashok+Yadav+%26+Associates,+Idris+Compound,+Goregaon+-+Mulund+Link+Rd,+opposite+Hotel+Sahara,+Goregaon,+Mumbai,+Maharashtra+400063,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7b7aac619af6d:0x995fb122f77ef07a?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQICxAA",
        },
        title: "Advocate Ashok Yadav & Associates",
        type: "Legal services",
        address:
          "Shop No-3a, Idris Compound, Goregaon - Mulund Link Rd, opposite Hotel Sahara",
        years_in_business: "10+ years in business",
        phone: "+91 88982 42424",
        hours: "Open ⋅ Closes 10:30 PM",
      },
      {
        position: 14,
        rating: 5.0,
        reviews_original: "(51)",
        reviews: 51,
        description: '"One of the finest lawyer i have ever met."',
        place_id: "13385084774792621616",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=13385084774792621616&q=advocates+in+mumbai",
        lsig: "AB86z5UDcQAqB97O8EuofLEsM4EM",
        provider_id: "/g/11g1dxcjl7",
        gps_coordinates: {
          latitude: 19.055899999999998,
          longitude: 72.8391218,
        },
        links: {
          directions:
            "https://www.google.com/maps/dir//Advocate+Krupa+Parekh,+105,+Veena+Beena,+Turner+Rd,+Bandra+West,+Mumbai,+Maharashtra+400050,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c9bf85e7ae57:0xb9c15faf7a00ee30?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIARAA",
        },
        title: "Advocate Krupa Parekh",
        type: "Civil law attorney",
        address: "105, Veena Beena, Turner Rd",
        hours: "Open ⋅ Closes 8 PM",
      },
      {
        position: 15,
        rating: 1.0,
        reviews_original: "(1)",
        reviews: 1,
        place_id: "5672657611025684434",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=5672657611025684434&q=advocates+in+mumbai",
        lsig: "AB86z5WrV0g9Llp9S5B7WOXW9a2v",
        gps_coordinates: {
          latitude: 18.9299565,
          longitude: 72.8315168,
        },
        title: "Hg",
        type: "Legal services",
        hours: "Closed ⋅ Opens 10:30 AM",
      },
      {
        position: 16,
        rating: 4.7,
        reviews_original: "(19)",
        reviews: 19,
        place_id: "12553503259639508295",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=12553503259639508295&q=advocates+in+mumbai",
        lsig: "AB86z5X4BQZAhXcdwT156RgQO7ZX",
        provider_id: "/g/1w6r6rg7",
        gps_coordinates: {
          latitude: 19.1075327,
          longitude: 72.86356769999999,
        },
        links: {
          website: "https://www.lawglobaladvocates.net/",
          directions:
            "https://www.google.com/maps/dir//LAW+GLOBAL+ADVOCATES,+Currimjee+Building,+1,+111,+Mahatma+Gandhi+Road,+opp.+University,+Fort,+Mumbai,+Maharashtra+400023,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7d1de7c008957:0xae3700b40d856d47?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIAhAA",
        },
        title: "LAW GLOBAL ADVOCATES",
        type: "Criminal justice attorney",
        address:
          "Currimjee Building, 1, 111, Mahatma Gandhi Road, opp. University",
        years_in_business: "30+ years in business",
        phone: "+91 98201 06460",
      },
      {
        position: 17,
        rating: 4.8,
        reviews_original: "(66)",
        reviews: 66,
        description:
          '"... shows her honest character which is quite rare in today\'s Advocates."',
        place_id: "6959068234279012156",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=6959068234279012156&q=advocates+in+mumbai",
        lsig: "AB86z5XjW0nkwh85MFShAQR7URRA",
        provider_id: "/g/11k5s8xp36",
        gps_coordinates: {
          latitude: 19.0764229,
          longitude: 72.8340496,
        },
        links: {
          website: "https://advocate-khevana-dagli.business.site/",
          directions:
            "https://www.google.com/maps/dir//Office+No.+17,+1st+floor,+Adv.+Khevana+Dagli,+BMC+Building,+behind+Darshan+Classic+CHS,+near+Unity+Bank,+J.B.+Nagar,+Andheri+East,+Mumbai,+Maharashtra+400099,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c92a23e7e111:0x609393b037e7c73c?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQICBAA",
        },
        title: "Adv. Khevana Dagli",
        type: "Attorney",
        address:
          "Office No. 17, 1st floor, BMC Building, behind Darshan Classic CHS, near Unity Bank",
        years_in_business: "7+ years in business",
        phone: "+91 91675 14777",
        hours: "Open ⋅ Closes 10 PM",
      },
      {
        position: 18,
        rating: 5.0,
        reviews_original: "(4)",
        reviews: 4,
        place_id: "8766870752715455416",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=8766870752715455416&q=advocates+in+mumbai",
        lsig: "AB86z5Wr9Qi2ARjB1jhqmAEZSIGD",
        provider_id: "/g/11fhz7wjrn",
        gps_coordinates: {
          latitude: 19.113344599999998,
          longitude: 72.8301805,
        },
        service_options: {
          onsite_services: true,
          online_appointments: true,
        },
        links: {
          website: "http://prakkashrohira.in/",
          directions:
            "https://www.google.com/maps/dir//Advocate+Prakkash+Rohira,+Amrit+Bhavan,+1,+Linking+Rd,+Santacruz+West,+Mumbai,+Maharashtra+400054,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7c985b6477695:0x79aa2e802f5dbbb8?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIBxAA",
        },
        title: "Advocate Prakkash Rohira",
        type: "Real estate attorney",
        address: "Amrit Bhavan, 1, Linking Rd",
        years_in_business: "3+ years in business",
        phone: "+91 98673 00015",
        hours: "Opens soon ⋅ 10 AM",
      },
      {
        position: 19,
        rating: 4.8,
        reviews_original: "(9)",
        reviews: 9,
        description: '"Best legal service provider"',
        place_id: "17630515078873822024",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=17630515078873822024&q=advocates+in+mumbai",
        lsig: "AB86z5XyM9KAOHsLu7GbVLPw8wyP",
        provider_id: "/g/11g8w899d1",
        gps_coordinates: {
          latitude: 18.9296275,
          longitude: 72.83201070000001,
        },
        links: {
          website: "http://www.bespokelegal.in/",
          directions:
            "https://www.google.com/maps/dir//Bespoke+Legal+-+Advocate+Aditya+Bhatt,+Sukhmani+Apartment,+Juhu+Himalaya+CHS+Lts,+N+S+Rd+Number+10,+JVPD+Scheme,+Juhu,+Mumbai,+Maharashtra+400049,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7d1ebc28fffff:0xf4ac2c0dc3713348?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIAxAA",
        },
        title: "Bespoke Legal - Advocate Aditya Bhatt",
        type: "Legal services",
        address: "Sukhmani Apartment, Juhu Himalaya CHS Lts, N S Rd Number 10",
        years_in_business: "5+ years in business",
        phone: "+91 91529 86287",
        hours: "Opens soon ⋅ 10 AM",
      },
      {
        position: 20,
        rating: 4.4,
        reviews_original: "(23)",
        reviews: 23,
        description: '"Very fine lawyer"',
        place_id: "4017915204936018002",
        place_id_search:
          "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&ludocid=4017915204936018002&q=advocates+in+mumbai",
        lsig: "AB86z5VDmKuiMtRpWGHnWVPgNa0Q",
        provider_id: "/g/1ptx_tkr2",
        gps_coordinates: {
          latitude: 18.929628,
          longitude: 72.83201,
        },
        links: {
          directions:
            "https://www.google.com/maps/dir//Mihir+Desai+Advocate,+4th+Floor,+Hind+Rajasthan+Chambers,+Oak+Lane+(Allana+Lane,+Off,+Nagindas+Master+Rd,+Fort,+Mumbai,+Maharashtra+400023,+India/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3be7d1c4a9dee98f:0x37c280974fda2852?sa=X&ved=2ahUKEwir4MORjZWBAxW6U6QEHbMZDNMQ48ADegQIBRAA",
        },
        title: "Mihir Desai Advocate",
        type: "Attorney",
        address:
          "4th Floor, Hind Rajasthan Chambers, Oak Lane (Allana Lane, Off, Nagindas Master Rd",
        years_in_business: "7+ years in business",
        phone: "+91 22 2262 5021",
        hours: "Opens soon ⋅ 10 AM",
      },
    ],
    pagination: {
      current: 1,
      next: "https://www.google.com/search?q=advocates+in+mumbai&hl=en&gl=us&start=20&tbm=lcl",
      other_pages: {
        2: "https://www.google.com/search?q=advocates+in+mumbai&hl=en&gl=us&start=20&tbm=lcl",
        3: "https://www.google.com/search?q=advocates+in+mumbai&hl=en&gl=us&start=40&tbm=lcl",
        4: "https://www.google.com/search?q=advocates+in+mumbai&hl=en&gl=us&start=60&tbm=lcl",
        5: "https://www.google.com/search?q=advocates+in+mumbai&hl=en&gl=us&start=80&tbm=lcl",
      },
    },
    serpapi_pagination: {
      current: 1,
      next_link:
        "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=advocates+in+mumbai&start=20",
      next: "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=advocates+in+mumbai&start=20",
      other_pages: {
        2: "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=advocates+in+mumbai&start=20",
        3: "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=advocates+in+mumbai&start=40",
        4: "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=advocates+in+mumbai&start=60",
        5: "https://serpapi.com/search.json?device=desktop&engine=google_local&gl=us&google_domain=google.com&hl=en&q=advocates+in+mumbai&start=80",
      },
    },
  };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     if (location !== "") {
  //       alert("location is added", location);
  //       const serpapiUrl = `http://serpapi.com/search.json?engine=google_local&q=legal+advisor+in+mumbai&location=Mumbai%2C+Maharashtra%2C+India&google_domain=google.co.in&gl=in&hl=en&api_key=5d1b79b4ee809fa8365d09f2d36a866dda3b7e1e2f93ad1c59726eff1454f4f2`;
  //       try {
  //         const response = await fetch(serpapiUrl,{ mode: 'no-cors' });
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         const data = await response.json();
  //         setData(data);
  //         console.log(data);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     }
  //   };
  //   fetchData();
  // }, [req]);

  return (
    <>
      <div className="container-map">
        <input
          placeholder="Enter your city"
          className="input"
          name="firstName"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="input-btn" onClick={handleClick}>
          <AiOutlineSearch />
        </button>
      </div>
      {
        <div className="map-box">
          <MapContainer center={cityCoordinates} zoom={11} key={mapKey}>
          <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
           {data2?.local_results.map((marker, id) => (
              <Marker
                key={marker.place_id}
                position={[
                  marker.gps_coordinates.latitude,
                  marker.gps_coordinates.longitude,
                ]}
                icon={customIcon}
              >
                  <Popup>{marker.title}<br></br>{marker.phone}</Popup>
              </Marker>
            ))}
          </MapContainer>
          
        </div>
      }
    </>
  );
};

export default Map;
