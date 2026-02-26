module.exports = [
"[project]/lib/mock-data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AMBULANCE_STATUSES",
    ()=>AMBULANCE_STATUSES,
    "INCIDENT_STATUSES",
    ()=>INCIDENT_STATUSES,
    "ISSUE_TYPES",
    ()=>ISSUE_TYPES,
    "SEVERITY_LEVELS",
    ()=>SEVERITY_LEVELS,
    "mockAmbulances",
    ()=>mockAmbulances,
    "mockHospitals",
    ()=>mockHospitals,
    "mockIncidents",
    ()=>mockIncidents,
    "mockTrafficSignals",
    ()=>mockTrafficSignals
]);
const mockHospitals = [
    {
        id: "hosp-1",
        name: "Swamy Hospital",
        location: {
            latitude: 12.8550625,
            longitude: 77.6642727
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 72,
            doctors: 20
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-2",
        name: "Shanti Hospital",
        location: {
            latitude: 12.9235041,
            longitude: 77.5857517
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 114,
            doctors: 13
        },
        capabilities: [
            "respiratory",
            "burn",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-3",
        name: "Apollo Hospital",
        location: {
            latitude: 12.9263714,
            longitude: 77.6765455
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 108,
            doctors: 27
        },
        capabilities: [
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-4",
        name: "JBS Hospital",
        location: {
            latitude: 12.9207173,
            longitude: 77.5745968
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 83,
            doctors: 28
        },
        capabilities: [
            "trauma",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-5",
        name: "Jayanagar heart Centre",
        location: {
            latitude: 12.9231684,
            longitude: 77.584433
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 29,
            doctors: 23
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-6",
        name: "Sri Vijayalakshmi Pragathi Hospital",
        location: {
            latitude: 13.0371728,
            longitude: 77.6409543
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 75,
            doctors: 25
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-7",
        name: "Sathya Hospital",
        location: {
            latitude: 13.0185503,
            longitude: 77.6364728
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 66,
            doctors: 28
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-8",
        name: "Ramakrishna Hospital",
        location: {
            latitude: 12.8500655,
            longitude: 77.6624706
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 46,
            doctors: 12
        },
        capabilities: [
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-9",
        name: "Chord Road Hospital Pvt Ltd",
        location: {
            latitude: 12.9981215,
            longitude: 77.5404836
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 85,
            doctors: 24
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-10",
        name: "Pristline Hospital",
        location: {
            latitude: 12.9978931,
            longitude: 77.5436127
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 71,
            doctors: 30
        },
        capabilities: [
            "respiratory",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-11",
        name: "Bengaluru Hospital, Susruta Medical Aid AndResearch Home Limited",
        location: {
            latitude: 12.9376734,
            longitude: 77.5802836
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 47,
            doctors: 16
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-12",
        name: "Manipal Northside Hospital",
        location: {
            latitude: 13.0011275,
            longitude: 77.5639285
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 70,
            doctors: 10
        },
        capabilities: [
            "burn",
            "poisoning",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-13",
        name: "Government Primary Health Centre",
        location: {
            latitude: 12.9503234,
            longitude: 77.6162619
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 67,
            doctors: 10
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-14",
        name: "Divakars speciality Hospital",
        location: {
            latitude: 12.9100629,
            longitude: 77.5924585
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 62,
            doctors: 10
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-15",
        name: "BMTC Hospital",
        location: {
            latitude: 12.9234317,
            longitude: 77.5923374
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 49,
            doctors: 28
        },
        capabilities: [
            "cardiac",
            "burn",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-16",
        name: "Ramakrishna Nursing Home and Hospital",
        location: {
            latitude: 12.9364329,
            longitude: 77.583477
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 32,
            doctors: 31
        },
        capabilities: [
            "cardiac",
            "burn",
            "other",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-17",
        name: "RMV Hospital",
        location: {
            latitude: 13.0322788,
            longitude: 77.576876
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 67,
            doctors: 37
        },
        capabilities: [
            "respiratory",
            "burn",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-18",
        name: "Yashomathi Hospitals",
        location: {
            latitude: 12.9559302,
            longitude: 77.7112689
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 23,
            doctors: 11
        },
        capabilities: [
            "other",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-19",
        name: "Mallya Audikesh Diagnostics Center",
        location: {
            latitude: 12.9815051,
            longitude: 77.6011944
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 49,
            doctors: 23
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-20",
        name: "Mallige Medical Centre",
        location: {
            latitude: 12.985247,
            longitude: 77.5803846
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 99,
            doctors: 11
        },
        capabilities: [
            "stroke",
            "burn",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-21",
        name: "Devine Hospital",
        location: {
            latitude: 13.0038999,
            longitude: 77.6039313
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 48,
            doctors: 37
        },
        capabilities: [
            "respiratory",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-22",
        name: "Lalbagh Nursing Home",
        location: {
            latitude: 12.9452313,
            longitude: 77.5861734
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 29,
            doctors: 17
        },
        capabilities: [
            "burn",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-23",
        name: "Government Maternity Hospital",
        location: {
            latitude: 12.9988604,
            longitude: 77.5817424
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 81,
            doctors: 26
        },
        capabilities: [
            "respiratory",
            "other",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-24",
        name: "Kanva Diagnostics Collection Centre",
        location: {
            latitude: 12.967291,
            longitude: 77.5429164
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 113,
            doctors: 38
        },
        capabilities: [
            "respiratory",
            "stroke",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-25",
        name: "New Akshay Mallya Hospital",
        location: {
            latitude: 12.9568527,
            longitude: 77.6990468
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 31,
            doctors: 18
        },
        capabilities: [
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-26",
        name: "Presidency Hospital",
        location: {
            latitude: 12.9951629,
            longitude: 77.69923
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 32,
            doctors: 38
        },
        capabilities: [
            "poisoning",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-27",
        name: "BGS Gleneagles Hospitals",
        location: {
            latitude: 12.90306,
            longitude: 77.4974982
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 74,
            doctors: 19
        },
        capabilities: [
            "poisoning",
            "respiratory",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-28",
        name: "Metro Hospital",
        location: {
            latitude: 12.8915893,
            longitude: 77.560715
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 63,
            doctors: 26
        },
        capabilities: [
            "burn",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-29",
        name: "Brookefield Hospital(A Unit Of Sanjeevani Hospital)",
        location: {
            latitude: 12.9668213,
            longitude: 77.7168891
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 74,
            doctors: 31
        },
        capabilities: [
            "trauma",
            "stroke",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-30",
        name: "Tenet diagnostics",
        location: {
            latitude: 12.9573067,
            longitude: 77.7087044
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 68,
            doctors: 27
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-31",
        name: "ESI Hospital",
        location: {
            latitude: 12.995242,
            longitude: 77.6523255
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 93,
            doctors: 36
        },
        capabilities: [
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-32",
        name: "Karunalayam Hospital",
        location: {
            latitude: 12.9111263,
            longitude: 77.7073377
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 97,
            doctors: 26
        },
        capabilities: [
            "cardiac",
            "respiratory",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-33",
        name: "SDS Tuberculosis Research Centre and Rajiv Gandhi Institute of Chest diseases",
        location: {
            latitude: 12.9367955,
            longitude: 77.5907094
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 111,
            doctors: 35
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-34",
        name: "Maiya Multispecialty Hospital",
        location: {
            latitude: 12.942614,
            longitude: 77.5854533
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 109,
            doctors: 36
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-35",
        name: "Narayana Netralaya",
        location: {
            latitude: 12.9671401,
            longitude: 77.6094485
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 31,
            doctors: 17
        },
        capabilities: [
            "trauma",
            "respiratory",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-36",
        name: "London Hospital",
        location: {
            latitude: 13.0806193,
            longitude: 77.5482263
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 119,
            doctors: 24
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-37",
        name: "Nagappa Hadli Hospital",
        location: {
            latitude: 13.0829889,
            longitude: 77.5489026
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 37,
            doctors: 18
        },
        capabilities: [
            "burn",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-38",
        name: "Vasan Eye Care Hospital, Nagarabhavi",
        location: {
            latitude: 12.9746134,
            longitude: 77.5129757
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 80,
            doctors: 38
        },
        capabilities: [
            "trauma",
            "burn",
            "stroke",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-39",
        name: "Rc Hospital",
        location: {
            latitude: 12.930936,
            longitude: 77.5153776
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 52,
            doctors: 16
        },
        capabilities: [
            "cardiac",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-40",
        name: "Veturi Child Health Centre",
        location: {
            latitude: 12.9263226,
            longitude: 77.5156579
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 96,
            doctors: 31
        },
        capabilities: [
            "other",
            "trauma",
            "cardiac",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-41",
        name: "Ketham's Hospital Pvt. Ltd",
        location: {
            latitude: 13.0686568,
            longitude: 77.5582571
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 105,
            doctors: 23
        },
        capabilities: [
            "burn",
            "trauma",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-42",
        name: "Ragavendra Hospital",
        location: {
            latitude: 13.0425433,
            longitude: 77.5155377
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 28,
            doctors: 27
        },
        capabilities: [
            "respiratory",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-43",
        name: "Deeksha Orthopaedic Hospital",
        location: {
            latitude: 13.0973922,
            longitude: 77.5964894
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 111,
            doctors: 31
        },
        capabilities: [
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-44",
        name: "Shushrusha Hospital",
        location: {
            latitude: 13.0997316,
            longitude: 77.5980216
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 67,
            doctors: 20
        },
        capabilities: [
            "cardiac",
            "respiratory",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-45",
        name: "Chirag Hospital and Maternity Center",
        location: {
            latitude: 12.9126298,
            longitude: 77.5913594
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 67,
            doctors: 30
        },
        capabilities: [
            "poisoning",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-46",
        name: "Udhbhava Hospital",
        location: {
            latitude: 12.9256842,
            longitude: 77.5489346
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 62,
            doctors: 18
        },
        capabilities: [
            "respiratory",
            "cardiac",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-47",
        name: "DG Hospital",
        location: {
            latitude: 12.9206648,
            longitude: 77.5598673
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 109,
            doctors: 17
        },
        capabilities: [
            "respiratory",
            "poisoning",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-48",
        name: "Srinivasa Nursing Home",
        location: {
            latitude: 12.9423039,
            longitude: 77.6174893
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 72,
            doctors: 27
        },
        capabilities: [
            "burn",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-49",
        name: "Chaitanya Hospital",
        location: {
            latitude: 13.0990911,
            longitude: 77.5861904
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 53,
            doctors: 29
        },
        capabilities: [
            "trauma",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-50",
        name: "Vasan Eye Care Hospital, Koramangala",
        location: {
            latitude: 12.9402371,
            longitude: 77.6253403
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 27,
            doctors: 31
        },
        capabilities: [
            "poisoning",
            "cardiac",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-51",
        name: "health nest",
        location: {
            latitude: 12.9075992,
            longitude: 77.6488507
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 96,
            doctors: 21
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-52",
        name: "Seventh Day Adventist Hospital",
        location: {
            latitude: 12.995625,
            longitude: 77.6113272
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 59,
            doctors: 38
        },
        capabilities: [
            "poisoning",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-53",
        name: "Srinivasa Nursing Home",
        location: {
            latitude: 12.9965077,
            longitude: 77.6220456
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 31,
            doctors: 30
        },
        capabilities: [
            "burn",
            "stroke",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-54",
        name: "Pristine Health care",
        location: {
            latitude: 12.9382768,
            longitude: 77.6186753
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 83,
            doctors: 38
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-55",
        name: "Mamtha Health Center",
        location: {
            latitude: 12.9180492,
            longitude: 77.6318764
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 36,
            doctors: 27
        },
        capabilities: [
            "burn",
            "poisoning",
            "stroke",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-56",
        name: "Suprabha Hospital",
        location: {
            latitude: 13.0079383,
            longitude: 77.5469059
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 39,
            doctors: 36
        },
        capabilities: [
            "respiratory",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-57",
        name: "Sangolli Nursing Home",
        location: {
            latitude: 13.0083564,
            longitude: 77.5469273
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 36,
            doctors: 26
        },
        capabilities: [
            "respiratory",
            "other",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-58",
        name: "Diacon Hospital",
        location: {
            latitude: 13.0037682,
            longitude: 77.5498337
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 83,
            doctors: 18
        },
        capabilities: [
            "burn",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-59",
        name: "Agarwal Eye Hospital",
        location: {
            latitude: 12.9273417,
            longitude: 77.6221301
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 20,
            doctors: 31
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-60",
        name: "Venkateshwara Hospital",
        location: {
            latitude: 12.9257842,
            longitude: 77.6170828
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 59,
            doctors: 17
        },
        capabilities: [
            "poisoning",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-61",
        name: "Namratha Hospital",
        location: {
            latitude: 13.0047859,
            longitude: 77.543073
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 34,
            doctors: 35
        },
        capabilities: [
            "stroke",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-62",
        name: "Devi Eye Hospital",
        location: {
            latitude: 12.9162576,
            longitude: 77.6374069
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 44,
            doctors: 14
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-63",
        name: "Mysore Hospital",
        location: {
            latitude: 13.0275337,
            longitude: 77.5397051
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 104,
            doctors: 30
        },
        capabilities: [
            "poisoning",
            "respiratory",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-64",
        name: "Jayanagar Orthopaedic Centre",
        location: {
            latitude: 12.9293288,
            longitude: 77.5877091
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 33,
            doctors: 18
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-65",
        name: "Shekar Hospital",
        location: {
            latitude: 12.9458714,
            longitude: 77.5675192
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 73,
            doctors: 21
        },
        capabilities: [
            "trauma",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-66",
        name: "Punya Hospital",
        location: {
            latitude: 13.0011459,
            longitude: 77.5359798
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 58,
            doctors: 29
        },
        capabilities: [
            "burn",
            "cardiac",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-67",
        name: "Vasan Eye Care",
        location: {
            latitude: 12.9102705,
            longitude: 77.6265538
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 77,
            doctors: 19
        },
        capabilities: [
            "respiratory",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-68",
        name: "Karanth Speciality Hospital",
        location: {
            latitude: 12.9160081,
            longitude: 77.6193573
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 112,
            doctors: 24
        },
        capabilities: [
            "respiratory",
            "other",
            "poisoning",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-69",
        name: "Gangothri Hospital",
        location: {
            latitude: 12.9162878,
            longitude: 77.6138218
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 34,
            doctors: 22
        },
        capabilities: [
            "poisoning",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-70",
        name: "Spurthy Hospital",
        location: {
            latitude: 12.9239335,
            longitude: 77.61116
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 118,
            doctors: 37
        },
        capabilities: [
            "respiratory",
            "poisoning",
            "stroke",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-71",
        name: "Prasad Eye Hospital",
        location: {
            latitude: 12.9351929,
            longitude: 77.6086817
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 98,
            doctors: 29
        },
        capabilities: [
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-72",
        name: "NIMHANS Screening block",
        location: {
            latitude: 12.9387115,
            longitude: 77.5937737
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 42,
            doctors: 37
        },
        capabilities: [
            "stroke",
            "poisoning",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-73",
        name: "NIMHANS OPD",
        location: {
            latitude: 12.9388056,
            longitude: 77.5942994
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 70,
            doctors: 27
        },
        capabilities: [
            "stroke",
            "trauma",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-74",
        name: "Manjunath Hospital",
        location: {
            latitude: 12.9483598,
            longitude: 77.5940621
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 90,
            doctors: 32
        },
        capabilities: [
            "trauma",
            "burn",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-75",
        name: "Karthik Hospital",
        location: {
            latitude: 12.9484356,
            longitude: 77.5942592
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 92,
            doctors: 24
        },
        capabilities: [
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-76",
        name: "Aswad Hospital",
        location: {
            latitude: 12.9147871,
            longitude: 77.6247622
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 50,
            doctors: 23
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-77",
        name: "TSR heart care",
        location: {
            latitude: 13.0264438,
            longitude: 77.5933686
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 92,
            doctors: 38
        },
        capabilities: [
            "trauma",
            "respiratory",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-78",
        name: "Fortis Hospital",
        location: {
            latitude: 13.0022409,
            longitude: 77.5490879
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 54,
            doctors: 27
        },
        capabilities: [
            "poisoning",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-79",
        name: "Citi Hospital",
        location: {
            latitude: 12.9956506,
            longitude: 77.5510696
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 23,
            doctors: 22
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-80",
        name: "Vasan Eye Care Hospital, Rajaji Nagar",
        location: {
            latitude: 12.9995223,
            longitude: 77.5505328
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 83,
            doctors: 29
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-81",
        name: "Ananya Hospital",
        location: {
            latitude: 12.9998205,
            longitude: 77.55045
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 114,
            doctors: 32
        },
        capabilities: [
            "stroke",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-82",
        name: "Baptist",
        location: {
            latitude: 12.9970915,
            longitude: 77.5719766
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 109,
            doctors: 10
        },
        capabilities: [
            "poisoning",
            "trauma",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-83",
        name: "Shivakrupa Hospital",
        location: {
            latitude: 12.973967,
            longitude: 77.5479135
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 26,
            doctors: 33
        },
        capabilities: [
            "cardiac",
            "respiratory",
            "other",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-84",
        name: "Dr. Ambedkar Medical College Hospital",
        location: {
            latitude: 13.0248621,
            longitude: 77.6139585
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 60,
            doctors: 20
        },
        capabilities: [
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-85",
        name: "Sri Maruthi hospital, Sheshadripuram",
        location: {
            latitude: 12.9926441,
            longitude: 77.5742046
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 116,
            doctors: 14
        },
        capabilities: [
            "burn",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-86",
        name: "Karunya Homoeopathy Centre",
        location: {
            latitude: 13.0307899,
            longitude: 77.653594
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 111,
            doctors: 14
        },
        capabilities: [
            "poisoning",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-87",
        name: "Ayur Seva Hospital",
        location: {
            latitude: 13.0148188,
            longitude: 77.6653699
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 64,
            doctors: 14
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-88",
        name: "Vinayaka Specialty Hospital",
        location: {
            latitude: 12.8990004,
            longitude: 77.6218548
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 42,
            doctors: 30
        },
        capabilities: [
            "burn",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-89",
        name: "Koshys Hospital",
        location: {
            latitude: 13.0207033,
            longitude: 77.6760593
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 86,
            doctors: 36
        },
        capabilities: [
            "burn",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-90",
        name: "Gurushree Hitech Multispeciality Hospital",
        location: {
            latitude: 12.9593144,
            longitude: 77.5265054
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 72,
            doctors: 33
        },
        capabilities: [
            "cardiac",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-91",
        name: "Shobha Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9755854,
            longitude: 77.5313495
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 33,
            doctors: 37
        },
        capabilities: [
            "burn",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-92",
        name: "Gayathri Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9744053,
            longitude: 77.5426819
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 42,
            doctors: 14
        },
        capabilities: [
            "stroke",
            "cardiac",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-93",
        name: "MEDSOL Hospital",
        location: {
            latitude: 12.9309944,
            longitude: 77.4929837
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 58,
            doctors: 15
        },
        capabilities: [
            "other",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-94",
        name: "Government Primary Health Centre",
        location: {
            latitude: 13.003447,
            longitude: 77.504284
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 24,
            doctors: 32
        },
        capabilities: [
            "other",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-95",
        name: "Bharathy Hospital",
        location: {
            latitude: 12.9761294,
            longitude: 77.5326369
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 103,
            doctors: 39
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-96",
        name: "Yogananda Medical and Research Centre",
        location: {
            latitude: 12.9202791,
            longitude: 77.5598033
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 81,
            doctors: 36
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-97",
        name: "Government Primary Healthcare Center, Begur",
        location: {
            latitude: 12.8778532,
            longitude: 77.6246582
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 43,
            doctors: 15
        },
        capabilities: [
            "poisoning",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-98",
        name: "Shirdi Sai Hospital",
        location: {
            latitude: 13.0372438,
            longitude: 77.5648754
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 42,
            doctors: 23
        },
        capabilities: [
            "stroke",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-99",
        name: "Nayantara Opticals",
        location: {
            latitude: 12.8924828,
            longitude: 77.6198497
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 43,
            doctors: 10
        },
        capabilities: [
            "poisoning",
            "respiratory",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-100",
        name: "Kottakkal Arya Vaidya Sala",
        location: {
            latitude: 12.9411061,
            longitude: 77.5850591
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 99,
            doctors: 25
        },
        capabilities: [
            "cardiac",
            "respiratory",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-101",
        name: "Charan Homeopathy, Ramamurthy Nagar",
        location: {
            latitude: 13.0100409,
            longitude: 77.6674667
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 51,
            doctors: 17
        },
        capabilities: [
            "stroke",
            "trauma",
            "cardiac",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-102",
        name: "Dhanavantri Hospital",
        location: {
            latitude: 13.0834023,
            longitude: 77.6348642
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 44,
            doctors: 11
        },
        capabilities: [
            "poisoning",
            "cardiac",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-103",
        name: "T.R.Hospital",
        location: {
            latitude: 12.8807554,
            longitude: 77.5841671
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 106,
            doctors: 28
        },
        capabilities: [
            "cardiac",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-104",
        name: "Cloud Nine Hospital",
        location: {
            latitude: 13.0078742,
            longitude: 77.5625316
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 109,
            doctors: 10
        },
        capabilities: [
            "stroke",
            "trauma",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-105",
        name: "Nayak Hospital, Gayathri Nagar",
        location: {
            latitude: 12.9993857,
            longitude: 77.5606403
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 36,
            doctors: 20
        },
        capabilities: [
            "stroke",
            "other",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-106",
        name: "Rajnandani Hospital, Bangalore",
        location: {
            latitude: 12.8845448,
            longitude: 77.5701276
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 112,
            doctors: 31
        },
        capabilities: [
            "other",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-107",
        name: "Maharaja Agrasen Hospital, Bengaluru Urban",
        location: {
            latitude: 12.915903,
            longitude: 77.5550223
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 37,
            doctors: 20
        },
        capabilities: [
            "poisoning",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-108",
        name: "Banashankari Referral Hospital",
        location: {
            latitude: 12.9231342,
            longitude: 77.5642974
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 82,
            doctors: 37
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-109",
        name: "Bangalore Kidney Foundation - NU Hospital",
        location: {
            latitude: 12.9179548,
            longitude: 77.555816
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 116,
            doctors: 39
        },
        capabilities: [
            "burn",
            "cardiac",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-110",
        name: "Panacea Hospital, Nagarabhavi",
        location: {
            latitude: 12.9613237,
            longitude: 77.511726
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 31,
            doctors: 36
        },
        capabilities: [
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-111",
        name: "Shanbhag Hospital",
        location: {
            latitude: 12.9856882,
            longitude: 77.5435424
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 56,
            doctors: 28
        },
        capabilities: [
            "cardiac",
            "burn",
            "poisoning",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-112",
        name: "Trupti Nursing Home",
        location: {
            latitude: 12.9946566,
            longitude: 77.5397544
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 107,
            doctors: 38
        },
        capabilities: [
            "other",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-113",
        name: "Srivijaya Speciality Hospital",
        location: {
            latitude: 13.0124345,
            longitude: 77.6580271
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 44,
            doctors: 28
        },
        capabilities: [
            "burn",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-114",
        name: "Magnus Diagnostic Lab",
        location: {
            latitude: 12.9349187,
            longitude: 77.6305022
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 57,
            doctors: 37
        },
        capabilities: [
            "other",
            "trauma",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-115",
        name: "Krupa Medical center",
        location: {
            latitude: 13.000431,
            longitude: 77.5411664
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 110,
            doctors: 33
        },
        capabilities: [
            "other",
            "burn",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-116",
        name: "Soukya Hospital",
        location: {
            latitude: 13.0774744,
            longitude: 77.5587548
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 32,
            doctors: 31
        },
        capabilities: [
            "stroke",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-117",
        name: "Greenview Medical Center",
        location: {
            latitude: 12.9191813,
            longitude: 77.6381379
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 67,
            doctors: 34
        },
        capabilities: [
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-118",
        name: "Vaidyaratnam Oushadhasala",
        location: {
            latitude: 12.9121004,
            longitude: 77.6485848
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 74,
            doctors: 38
        },
        capabilities: [
            "burn",
            "trauma",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-119",
        name: "Blossoms Hospital",
        location: {
            latitude: 12.9064393,
            longitude: 77.6308237
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 115,
            doctors: 30
        },
        capabilities: [
            "trauma",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-120",
        name: "Live100",
        location: {
            latitude: 12.8791713,
            longitude: 77.6454925
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 39,
            doctors: 36
        },
        capabilities: [
            "burn",
            "respiratory",
            "other",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-121",
        name: "ESi Hospital",
        location: {
            latitude: 13.0077936,
            longitude: 77.6923101
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 110,
            doctors: 25
        },
        capabilities: [
            "burn",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-122",
        name: "Happy Tooth",
        location: {
            latitude: 12.9744193,
            longitude: 77.5336479
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 92,
            doctors: 35
        },
        capabilities: [
            "burn",
            "cardiac",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-123",
        name: "Penta Care Ayurvedic Hospital",
        location: {
            latitude: 12.9736894,
            longitude: 77.5369482
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 57,
            doctors: 14
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-124",
        name: "Shalini Nursing & MAternity Home",
        location: {
            latitude: 12.9436624,
            longitude: 77.5419997
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 103,
            doctors: 18
        },
        capabilities: [
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-125",
        name: "Anurag Medical Center",
        location: {
            latitude: 12.9612829,
            longitude: 77.5271683
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 77,
            doctors: 16
        },
        capabilities: [
            "respiratory",
            "other",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-126",
        name: "United Medical lab",
        location: {
            latitude: 13.0007683,
            longitude: 77.6132902
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 91,
            doctors: 24
        },
        capabilities: [
            "other",
            "trauma",
            "cardiac",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-127",
        name: "Pragathi Ayurvedic Center",
        location: {
            latitude: 12.9843701,
            longitude: 77.555666
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 50,
            doctors: 34
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-128",
        name: "Srujana Hospital",
        location: {
            latitude: 12.8413465,
            longitude: 77.6475451
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 108,
            doctors: 38
        },
        capabilities: [
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-129",
        name: "Kottakkal Arya Vaidya Sala",
        location: {
            latitude: 12.9002599,
            longitude: 77.6271003
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 114,
            doctors: 10
        },
        capabilities: [
            "respiratory",
            "other",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-130",
        name: "Sharavathi Hospitals (P) Ltd.",
        location: {
            latitude: 12.9623406,
            longitude: 77.5342853
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 91,
            doctors: 23
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-131",
        name: "Dr.Agarwal's Eye Hospital Ltd, Padmanabha Nagar",
        location: {
            latitude: 12.9169288,
            longitude: 77.5592568
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 98,
            doctors: 16
        },
        capabilities: [
            "burn",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-132",
        name: "Shraddha Eye Care",
        location: {
            latitude: 12.9184617,
            longitude: 77.5555842
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 21,
            doctors: 17
        },
        capabilities: [
            "other",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-133",
        name: "Vasan Eye Care Hospital, Rajarajeswari Nagar",
        location: {
            latitude: 12.931334,
            longitude: 77.5154779
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 106,
            doctors: 11
        },
        capabilities: [
            "cardiac",
            "trauma",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-134",
        name: "Cloud Nine Fertility",
        location: {
            latitude: 12.9055088,
            longitude: 77.5858347
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 96,
            doctors: 10
        },
        capabilities: [
            "trauma",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-135",
        name: "Aikya Healthcare",
        location: {
            latitude: 12.8827229,
            longitude: 77.5466715
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 105,
            doctors: 22
        },
        capabilities: [
            "cardiac",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-136",
        name: "Konanakunte Government Hospital",
        location: {
            latitude: 12.8840897,
            longitude: 77.5664029
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 119,
            doctors: 34
        },
        capabilities: [
            "stroke",
            "respiratory",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-137",
        name: "Rajarajeshwari Hospital and Medical College",
        location: {
            latitude: 12.896052,
            longitude: 77.4618775
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 86,
            doctors: 22
        },
        capabilities: [
            "poisoning",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-138",
        name: "Cloud Nine Hospital",
        location: {
            latitude: 12.9878709,
            longitude: 77.7319773
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 57,
            doctors: 25
        },
        capabilities: [
            "poisoning",
            "cardiac",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-139",
        name: "Telerad Rx Dx Health Care Whitefield",
        location: {
            latitude: 12.9768424,
            longitude: 77.7103746
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 91,
            doctors: 32
        },
        capabilities: [
            "burn",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-140",
        name: "Motherhood Hospital(Unit Of Rhea Healthcare Pvt Ltd)",
        location: {
            latitude: 12.9784409,
            longitude: 77.6375845
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 29,
            doctors: 26
        },
        capabilities: [
            "trauma",
            "stroke",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-141",
        name: "Rashmi Hospital",
        location: {
            latitude: 12.9766951,
            longitude: 77.6362278
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 45,
            doctors: 19
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-142",
        name: "Netradama Eye Hospital",
        location: {
            latitude: 12.9734836,
            longitude: 77.6357281
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 110,
            doctors: 37
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-143",
        name: "Sree Venkateshwara Speciality Hospital",
        location: {
            latitude: 12.9425246,
            longitude: 77.6025303
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 91,
            doctors: 22
        },
        capabilities: [
            "poisoning",
            "trauma",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-144",
        name: "Leela Hospital and Diagnostic Center",
        location: {
            latitude: 13.0002667,
            longitude: 77.5694894
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 36,
            doctors: 32
        },
        capabilities: [
            "respiratory",
            "poisoning",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-145",
        name: "Dr. Rajkumar Blood Bank",
        location: {
            latitude: 12.968031,
            longitude: 77.5878222
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 111,
            doctors: 16
        },
        capabilities: [
            "poisoning",
            "other",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-146",
        name: "Nelivigi Eye Hospital",
        location: {
            latitude: 12.9241818,
            longitude: 77.6737518
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 33,
            doctors: 18
        },
        capabilities: [
            "burn",
            "respiratory",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-147",
        name: "Sanghi Medical Centre (P) Ltd",
        location: {
            latitude: 12.9517397,
            longitude: 77.6994832
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 55,
            doctors: 15
        },
        capabilities: [
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-148",
        name: "Sri Sai Krupa Hospital, Bengaluru Urban",
        location: {
            latitude: 13.0294181,
            longitude: 77.5593857
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 116,
            doctors: 39
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-149",
        name: "ALDOS Medical Service Pvt LTD",
        location: {
            latitude: 12.9826672,
            longitude: 77.6381036
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 73,
            doctors: 20
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-150",
        name: "Government Hospital",
        location: {
            latitude: 12.8870605,
            longitude: 77.603414
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 60,
            doctors: 32
        },
        capabilities: [
            "respiratory",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-151",
        name: "Rajashree Granthim hospital",
        location: {
            latitude: 12.8893134,
            longitude: 77.602422
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 97,
            doctors: 19
        },
        capabilities: [
            "trauma",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-152",
        name: "Sri Laxmi Hospital",
        location: {
            latitude: 12.8504718,
            longitude: 77.6553058
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 61,
            doctors: 14
        },
        capabilities: [
            "stroke",
            "trauma",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-153",
        name: "Krishna Nursing Home",
        location: {
            latitude: 12.9474222,
            longitude: 77.5986921
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 56,
            doctors: 10
        },
        capabilities: [
            "burn",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-154",
        name: "Shifa Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9900105,
            longitude: 77.5988107
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 99,
            doctors: 16
        },
        capabilities: [
            "cardiac",
            "burn",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-155",
        name: "Milann Fertility Center",
        location: {
            latitude: 12.9159249,
            longitude: 77.5856011
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 23,
            doctors: 28
        },
        capabilities: [
            "other",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-156",
        name: "Gift IVF center",
        location: {
            latitude: 12.962951,
            longitude: 77.6418711
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 38,
            doctors: 21
        },
        capabilities: [
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-157",
        name: "HCG Cancer Hospital",
        location: {
            latitude: 12.9603157,
            longitude: 77.5930493
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 114,
            doctors: 17
        },
        capabilities: [
            "stroke",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-158",
        name: "Health Care Global",
        location: {
            latitude: 12.9584755,
            longitude: 77.5919279
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 55,
            doctors: 31
        },
        capabilities: [
            "burn",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-159",
        name: "Gulecha Dental Care",
        location: {
            latitude: 12.9292418,
            longitude: 77.5893625
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 25,
            doctors: 21
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-160",
        name: "Prashanth Hospital",
        location: {
            latitude: 12.9066637,
            longitude: 77.6287463
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 55,
            doctors: 32
        },
        capabilities: [
            "stroke",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-161",
        name: "Dianova Diabetes Center and Hospital",
        location: {
            latitude: 13.0147612,
            longitude: 77.6335463
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 115,
            doctors: 16
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-162",
        name: "Ameena Medical centre",
        location: {
            latitude: 12.9777082,
            longitude: 77.6323407
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 73,
            doctors: 12
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-163",
        name: "Dr.Agarwal Eye & Dental Hospital",
        location: {
            latitude: 12.9700356,
            longitude: 77.6362439
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 58,
            doctors: 15
        },
        capabilities: [
            "burn",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-164",
        name: "SRL Diagnostics",
        location: {
            latitude: 12.9599306,
            longitude: 77.7160447
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 53,
            doctors: 14
        },
        capabilities: [
            "burn",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-165",
        name: "Dr Raos Maternity Hospital",
        location: {
            latitude: 12.9850421,
            longitude: 77.5460481
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 86,
            doctors: 17
        },
        capabilities: [
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-166",
        name: "Sagar Chandramma Hospitals",
        location: {
            latitude: 12.9485535,
            longitude: 77.5748248
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 25,
            doctors: 36
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-167",
        name: "Trilife Hospital",
        location: {
            latitude: 13.0169826,
            longitude: 77.6432959
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 22,
            doctors: 39
        },
        capabilities: [
            "other",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-168",
        name: "Vignesh Lab and Diagnostics",
        location: {
            latitude: 13.0267226,
            longitude: 77.6041132
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 33,
            doctors: 27
        },
        capabilities: [
            "trauma",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-169",
        name: "Apollo Cradle",
        location: {
            latitude: 12.9368104,
            longitude: 77.6206345
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 55,
            doctors: 34
        },
        capabilities: [
            "cardiac",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-170",
        name: "Shiva Kumaraswamy Building",
        location: {
            latitude: 12.9717049,
            longitude: 77.5493718
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 78,
            doctors: 22
        },
        capabilities: [
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-171",
        name: "Stanford Speciality Hospital",
        location: {
            latitude: 12.911533,
            longitude: 77.6764094
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 47,
            doctors: 28
        },
        capabilities: [
            "other",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-172",
        name: "Dr Mohan Nursing Home",
        location: {
            latitude: 12.9124371,
            longitude: 77.6813917
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 34,
            doctors: 26
        },
        capabilities: [
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-173",
        name: "Raksha Orthopaedic And Multi Speciality Centre",
        location: {
            latitude: 12.9041502,
            longitude: 77.6741043
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 82,
            doctors: 28
        },
        capabilities: [
            "respiratory",
            "other",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-174",
        name: "Narayana Nethralaya",
        location: {
            latitude: 12.8750879,
            longitude: 77.5950098
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 63,
            doctors: 37
        },
        capabilities: [
            "poisoning",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-175",
        name: "Naadi Ayurveda Center",
        location: {
            latitude: 12.9121008,
            longitude: 77.6820003
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 114,
            doctors: 25
        },
        capabilities: [
            "other",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-176",
        name: "Kottakkal Arya Vaidya Sala",
        location: {
            latitude: 12.9217604,
            longitude: 77.6618321
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 21,
            doctors: 32
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-177",
        name: "The Family Doctor & The Family Pharma",
        location: {
            latitude: 12.9122002,
            longitude: 77.6818637
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 28,
            doctors: 33
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-178",
        name: "Life Care Hospital",
        location: {
            latitude: 12.9194712,
            longitude: 77.6130111
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 106,
            doctors: 11
        },
        capabilities: [
            "trauma",
            "other",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-179",
        name: "Bhagavathi Hospitals Private Limited",
        location: {
            latitude: 12.9161259,
            longitude: 77.6311505
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 113,
            doctors: 38
        },
        capabilities: [
            "cardiac",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-180",
        name: "Gunasheela Hospitals",
        location: {
            latitude: 12.9250105,
            longitude: 77.6278708
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 89,
            doctors: 30
        },
        capabilities: [
            "cardiac",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-181",
        name: "NRS Medical & Dental Specialists Centre",
        location: {
            latitude: 12.9151071,
            longitude: 77.5624888
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 32,
            doctors: 25
        },
        capabilities: [
            "poisoning",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-182",
        name: "Anurag Medical Centre",
        location: {
            latitude: 12.9060641,
            longitude: 77.6049776
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 44,
            doctors: 27
        },
        capabilities: [
            "trauma",
            "cardiac",
            "burn",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-183",
        name: "Sarvodaya Hospital",
        location: {
            latitude: 12.9390944,
            longitude: 77.5619057
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 72,
            doctors: 14
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-184",
        name: "Indianova Healthcare Pvt Ltd",
        location: {
            latitude: 12.9703581,
            longitude: 77.63022
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 33,
            doctors: 39
        },
        capabilities: [
            "stroke",
            "other",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-185",
        name: "Sky Diagnostic Centre kumbena agrahara",
        location: {
            latitude: 12.9977711,
            longitude: 77.7548105
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 53,
            doctors: 13
        },
        capabilities: [
            "other",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-186",
        name: "Dr Rachna - Homeopathy",
        location: {
            latitude: 12.9179831,
            longitude: 77.6691258
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 54,
            doctors: 15
        },
        capabilities: [
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-187",
        name: "Regal Hospital",
        location: {
            latitude: 13.0830463,
            longitude: 77.6347174
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 28,
            doctors: 37
        },
        capabilities: [
            "other",
            "poisoning",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-188",
        name: "Thyrocare",
        location: {
            latitude: 13.0158543,
            longitude: 77.7033173
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 64,
            doctors: 16
        },
        capabilities: [
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-189",
        name: "Welnext",
        location: {
            latitude: 12.9240063,
            longitude: 77.6545058
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 79,
            doctors: 10
        },
        capabilities: [
            "cardiac",
            "burn",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-190",
        name: "Employees State Insurance Dispensary",
        location: {
            latitude: 12.966771,
            longitude: 77.5349228
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 118,
            doctors: 38
        },
        capabilities: [
            "cardiac",
            "respiratory",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-191",
        name: "Dr Solankis Eye Hospital",
        location: {
            latitude: 12.9951627,
            longitude: 77.5738144
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 51,
            doctors: 34
        },
        capabilities: [
            "cardiac",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-192",
        name: "Sri Sanjeevini Cold Laser Therapy",
        location: {
            latitude: 13.0053923,
            longitude: 77.5713352
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 57,
            doctors: 37
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-193",
        name: "Dr. Bhargavi Reddy Women & Children Hospital",
        location: {
            latitude: 12.975403,
            longitude: 77.6470594
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 34,
            doctors: 34
        },
        capabilities: [
            "poisoning",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-194",
        name: "Axon Speciality Hospital",
        location: {
            latitude: 12.973892,
            longitude: 77.6460904
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 99,
            doctors: 18
        },
        capabilities: [
            "cardiac",
            "poisoning",
            "trauma",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-195",
        name: "Procare Hospital",
        location: {
            latitude: 13.0203944,
            longitude: 77.6512682
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 42,
            doctors: 16
        },
        capabilities: [
            "stroke",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-196",
        name: "Parimala Health Care",
        location: {
            latitude: 12.9003193,
            longitude: 77.6008061
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 59,
            doctors: 12
        },
        capabilities: [
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-197",
        name: "Sriram Hospital, Bangalore",
        location: {
            latitude: 13.0087504,
            longitude: 77.6939806
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 25,
            doctors: 22
        },
        capabilities: [
            "cardiac",
            "respiratory",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-198",
        name: "K R Puram Super Speciality Hospital",
        location: {
            latitude: 13.0110115,
            longitude: 77.6935975
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 42,
            doctors: 11
        },
        capabilities: [
            "trauma",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-199",
        name: "Maithri Nursing Home",
        location: {
            latitude: 13.0048396,
            longitude: 77.7036425
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 102,
            doctors: 19
        },
        capabilities: [
            "burn",
            "trauma",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-200",
        name: "Medic Star Hospital",
        location: {
            latitude: 12.9876871,
            longitude: 77.6093097
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 70,
            doctors: 26
        },
        capabilities: [
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-201",
        name: "Hsis Gosha Hospital",
        location: {
            latitude: 12.9856985,
            longitude: 77.6058578
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 77,
            doctors: 25
        },
        capabilities: [
            "cardiac",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-202",
        name: "Santosh Hospital",
        location: {
            latitude: 12.9959413,
            longitude: 77.6082575
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 50,
            doctors: 34
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-203",
        name: "Hospital",
        location: {
            latitude: 12.9914123,
            longitude: 77.6117329
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 35,
            doctors: 17
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-204",
        name: "Keva Ayurveda Health Care Pvt Ltd",
        location: {
            latitude: 12.9127062,
            longitude: 77.6201668
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 47,
            doctors: 35
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-205",
        name: "Ayurvaid Hospital",
        location: {
            latitude: 12.9552696,
            longitude: 77.6428508
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 32,
            doctors: 32
        },
        capabilities: [
            "respiratory",
            "other",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-206",
        name: "H B S Hospital",
        location: {
            latitude: 12.9891941,
            longitude: 77.6037864
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 38,
            doctors: 18
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-207",
        name: "St. Martha's Heart Centre",
        location: {
            latitude: 12.9705436,
            longitude: 77.5834769
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 37,
            doctors: 26
        },
        capabilities: [
            "trauma",
            "poisoning",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-208",
        name: "Sumathi Nursing and Maternity Home",
        location: {
            latitude: 13.0325717,
            longitude: 77.5582602
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 45,
            doctors: 35
        },
        capabilities: [
            "burn",
            "cardiac",
            "stroke",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-209",
        name: "Desai Nursing Home",
        location: {
            latitude: 12.9863736,
            longitude: 77.5793154
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 25,
            doctors: 13
        },
        capabilities: [
            "respiratory",
            "cardiac",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-210",
        name: "Fortis Hospital",
        location: {
            latitude: 12.9881648,
            longitude: 77.5548179
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 67,
            doctors: 13
        },
        capabilities: [
            "stroke",
            "cardiac",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-211",
        name: "Healing Earth Multispeciality Ayurveda Hospital",
        location: {
            latitude: 12.9165359,
            longitude: 77.6361865
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 111,
            doctors: 19
        },
        capabilities: [
            "trauma",
            "other",
            "burn",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-212",
        name: "Global Ayurveda Multispeciality Hospital",
        location: {
            latitude: 12.9165795,
            longitude: 77.6362187
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 41,
            doctors: 19
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-213",
        name: "Brahmi Ayurvedic Center",
        location: {
            latitude: 12.8830054,
            longitude: 77.6073285
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 95,
            doctors: 36
        },
        capabilities: [
            "respiratory",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-214",
        name: "Fj Merrit Hydrotherapy And Wellness",
        location: {
            latitude: 12.9344224,
            longitude: 77.6299785
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 93,
            doctors: 35
        },
        capabilities: [
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-215",
        name: "Vedam Ayurveda Multispeciality Hospital",
        location: {
            latitude: 12.9175511,
            longitude: 77.6039486
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 25,
            doctors: 35
        },
        capabilities: [
            "other",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-216",
        name: "Ayur jagruti",
        location: {
            latitude: 12.9667253,
            longitude: 77.6378289
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 37,
            doctors: 33
        },
        capabilities: [
            "cardiac",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-217",
        name: "Herbocare Hospital Pvt",
        location: {
            latitude: 13.0204424,
            longitude: 77.6440607
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 37,
            doctors: 36
        },
        capabilities: [
            "trauma",
            "stroke",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-218",
        name: "\" NRS Medical & Dental Specialists Centre\"",
        location: {
            latitude: 12.9378359,
            longitude: 77.5573329
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 40,
            doctors: 36
        },
        capabilities: [
            "respiratory",
            "other",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-219",
        name: "Tele Rad RX DX Health care Pvt Ltd",
        location: {
            latitude: 12.9992982,
            longitude: 77.7575636
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 49,
            doctors: 12
        },
        capabilities: [
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-220",
        name: "Spring Leaf Health Care Pvt Ltd",
        location: {
            latitude: 12.8526731,
            longitude: 77.6676459
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 57,
            doctors: 13
        },
        capabilities: [
            "poisoning",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-221",
        name: "Chiranjeevi Hospital & Maternity Home",
        location: {
            latitude: 12.9386994,
            longitude: 77.5518394
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 22,
            doctors: 30
        },
        capabilities: [
            "other",
            "burn",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-222",
        name: "Vinayaka Hospital, Hanumantha Nagar",
        location: {
            latitude: 12.9373748,
            longitude: 77.5494778
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 32,
            doctors: 15
        },
        capabilities: [
            "other",
            "burn",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-223",
        name: "Diavista Diabetes & Multispeciality Hospital",
        location: {
            latitude: 12.9354293,
            longitude: 77.5477956
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 74,
            doctors: 38
        },
        capabilities: [
            "cardiac",
            "stroke",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-224",
        name: "Meenakshi Hospital",
        location: {
            latitude: 12.9420715,
            longitude: 77.553698
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 61,
            doctors: 24
        },
        capabilities: [
            "trauma",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-225",
        name: "Medi-Tech Multi Speciality Hospital",
        location: {
            latitude: 12.9408667,
            longitude: 77.5603657
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 81,
            doctors: 23
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-226",
        name: "Kusuma Hospital",
        location: {
            latitude: 12.9420124,
            longitude: 77.5506918
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 72,
            doctors: 31
        },
        capabilities: [
            "trauma",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-227",
        name: "Ring Road Hospital",
        location: {
            latitude: 12.9274553,
            longitude: 77.5516293
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 20,
            doctors: 10
        },
        capabilities: [
            "poisoning",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-228",
        name: "Pulse Multispecialty Hospital",
        location: {
            latitude: 12.9389007,
            longitude: 77.5438808
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 68,
            doctors: 36
        },
        capabilities: [
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-229",
        name: "Surya Galaxy Hospital",
        location: {
            latitude: 12.9316792,
            longitude: 77.5450887
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 95,
            doctors: 21
        },
        capabilities: [
            "respiratory",
            "trauma",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-230",
        name: "Wellness Ever",
        location: {
            latitude: 12.9593576,
            longitude: 77.7461682
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 115,
            doctors: 21
        },
        capabilities: [
            "poisoning",
            "respiratory",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-231",
        name: "Hair Loss Treatment in Bangalore - Hairline International",
        location: {
            latitude: 12.9566858,
            longitude: 77.7419283
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 62,
            doctors: 19
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-232",
        name: "Surya Diagnostics and Health Services",
        location: {
            latitude: 12.9242825,
            longitude: 77.6170883
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 93,
            doctors: 22
        },
        capabilities: [
            "poisoning",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-233",
        name: "Nimi dental bangalore",
        location: {
            latitude: 13.0090882,
            longitude: 77.6918556
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 52,
            doctors: 20
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-234",
        name: "New Life Hospital bangalore",
        location: {
            latitude: 12.9967611,
            longitude: 77.7591252
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 28,
            doctors: 24
        },
        capabilities: [
            "cardiac",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-235",
        name: "Ayushman Ayurvedic therapy centre",
        location: {
            latitude: 12.9946163,
            longitude: 77.6023871
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 31,
            doctors: 35
        },
        capabilities: [
            "trauma",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-236",
        name: "Pristine Hospital",
        location: {
            latitude: 12.9984229,
            longitude: 77.5403887
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 98,
            doctors: 36
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-237",
        name: "Sri Vinayaka Hospital",
        location: {
            latitude: 12.9575029,
            longitude: 77.5276466
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 87,
            doctors: 25
        },
        capabilities: [
            "cardiac",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-238",
        name: "Shathayu Ayurveda Wellness Centre",
        location: {
            latitude: 12.9573897,
            longitude: 77.5276882
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 70,
            doctors: 12
        },
        capabilities: [
            "trauma",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-239",
        name: "Shri Vishnu Ent Speciality Center",
        location: {
            latitude: 13.0226079,
            longitude: 77.4748015
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 57,
            doctors: 10
        },
        capabilities: [
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-240",
        name: "Hospital Sharavathi",
        location: {
            latitude: 12.9594984,
            longitude: 77.5275515
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 76,
            doctors: 16
        },
        capabilities: [
            "respiratory",
            "other",
            "poisoning",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-241",
        name: "Arogya Kendra",
        location: {
            latitude: 12.9735891,
            longitude: 77.5443283
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 20,
            doctors: 33
        },
        capabilities: [
            "burn",
            "poisoning",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-242",
        name: "The Family Doctor Malleswaram",
        location: {
            latitude: 13.0029689,
            longitude: 77.5526666
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 105,
            doctors: 27
        },
        capabilities: [
            "cardiac",
            "stroke",
            "poisoning",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-243",
        name: "Venkat Charmalaya",
        location: {
            latitude: 12.9644231,
            longitude: 77.5333324
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 68,
            doctors: 24
        },
        capabilities: [
            "stroke",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-244",
        name: "V Care Medical Systems P Ltd",
        location: {
            latitude: 12.9787049,
            longitude: 77.5403581
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 104,
            doctors: 24
        },
        capabilities: [
            "stroke",
            "other",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-245",
        name: "Manasa Hospital",
        location: {
            latitude: 12.968821,
            longitude: 77.5246297
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 57,
            doctors: 38
        },
        capabilities: [
            "respiratory",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-246",
        name: "Saikrupa Hospital For Women's and Surgical Centre",
        location: {
            latitude: 12.9691657,
            longitude: 77.5351921
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 86,
            doctors: 29
        },
        capabilities: [
            "poisoning",
            "other",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-247",
        name: "Cutis Academy of Cutaneous Sciences",
        location: {
            latitude: 12.9768117,
            longitude: 77.5449094
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 94,
            doctors: 26
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-248",
        name: "Acura Speciality Hospital",
        location: {
            latitude: 12.9353208,
            longitude: 77.6205504
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 70,
            doctors: 27
        },
        capabilities: [
            "other",
            "stroke",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-249",
        name: "Prasad Nethralaya",
        location: {
            latitude: 12.9603312,
            longitude: 77.5300796
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 112,
            doctors: 10
        },
        capabilities: [
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-250",
        name: "Vijayanagar Global Hospital",
        location: {
            latitude: 12.9717905,
            longitude: 77.5372864
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 74,
            doctors: 18
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-251",
        name: "Blossom Infertility Center",
        location: {
            latitude: 12.9649703,
            longitude: 77.5389842
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 81,
            doctors: 31
        },
        capabilities: [
            "respiratory",
            "other",
            "trauma",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-252",
        name: "Padmashree Nursing Home and Maternity Home",
        location: {
            latitude: 12.958321,
            longitude: 77.5350434
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 55,
            doctors: 29
        },
        capabilities: [
            "burn",
            "other",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-253",
        name: "Dhanush Hospital",
        location: {
            latitude: 12.9706209,
            longitude: 77.5151893
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 54,
            doctors: 34
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-254",
        name: "S K Hospital, Bengaluru Urban",
        location: {
            latitude: 12.957572,
            longitude: 77.5184436
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 46,
            doctors: 39
        },
        capabilities: [
            "other",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-255",
        name: "Green City Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9062193,
            longitude: 77.580682
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 106,
            doctors: 12
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-256",
        name: "The Homoeo World",
        location: {
            latitude: 12.9947201,
            longitude: 77.5715879
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 38,
            doctors: 35
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-257",
        name: "Modern Family Doctor Pvt Ltd",
        location: {
            latitude: 12.9698405,
            longitude: 77.5327211
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 72,
            doctors: 21
        },
        capabilities: [
            "burn",
            "trauma",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-258",
        name: "Oxford Hospital",
        location: {
            latitude: 12.9312101,
            longitude: 77.5756907
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 64,
            doctors: 32
        },
        capabilities: [
            "trauma",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-259",
        name: "Oxford Hospital",
        location: {
            latitude: 12.8584183,
            longitude: 77.6653346
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 27,
            doctors: 20
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-260",
        name: "R R Hospital & Trauma Centre",
        location: {
            latitude: 12.9059465,
            longitude: 77.5904192
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 39,
            doctors: 21
        },
        capabilities: [
            "poisoning",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-261",
        name: "Prashanth Hospital",
        location: {
            latitude: 12.9067129,
            longitude: 77.6265085
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 77,
            doctors: 27
        },
        capabilities: [
            "trauma",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-262",
        name: "Parimala Health Care",
        location: {
            latitude: 12.9009278,
            longitude: 77.5986641
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 91,
            doctors: 36
        },
        capabilities: [
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-263",
        name: "Springleaf Hospital",
        location: {
            latitude: 12.853228,
            longitude: 77.6653506
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 53,
            doctors: 36
        },
        capabilities: [
            "burn",
            "stroke",
            "cardiac",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-264",
        name: "Sri Ram Hospital",
        location: {
            latitude: 13.0096231,
            longitude: 77.6924713
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 25,
            doctors: 32
        },
        capabilities: [
            "burn",
            "trauma",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-265",
        name: "Vijay Diagnostic Centre",
        location: {
            latitude: 12.9458746,
            longitude: 77.5877756
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 25,
            doctors: 24
        },
        capabilities: [
            "respiratory",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-266",
        name: "Dr Lal PathLabs",
        location: {
            latitude: 12.924274,
            longitude: 77.5680927
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 93,
            doctors: 26
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-267",
        name: "Welnext",
        location: {
            latitude: 12.9242869,
            longitude: 77.6532853
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 90,
            doctors: 13
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-268",
        name: "Sri Sai Ram Hospital",
        location: {
            latitude: 12.8943049,
            longitude: 77.5682821
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 50,
            doctors: 16
        },
        capabilities: [
            "burn",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-269",
        name: "Tamara Hospital & IVF Centre",
        location: {
            latitude: 13.0044499,
            longitude: 77.5530755
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 51,
            doctors: 23
        },
        capabilities: [
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-270",
        name: "ChanRe Rheumatology and Immunology Center and Research",
        location: {
            latitude: 12.995573,
            longitude: 77.5354215
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 64,
            doctors: 12
        },
        capabilities: [
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-271",
        name: "Anupama Hospital",
        location: {
            latitude: 12.9838763,
            longitude: 77.4788534
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 100,
            doctors: 37
        },
        capabilities: [
            "cardiac",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-272",
        name: "Deepa Hospital",
        location: {
            latitude: 13.0120509,
            longitude: 77.6998816
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 75,
            doctors: 38
        },
        capabilities: [
            "trauma",
            "burn",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-273",
        name: "Manasa Hospital, Vijayanagar",
        location: {
            latitude: 12.9709463,
            longitude: 77.5451059
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 77,
            doctors: 32
        },
        capabilities: [
            "burn",
            "stroke",
            "poisoning",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-274",
        name: "Agarahara Government Hospital",
        location: {
            latitude: 13.0957329,
            longitude: 77.6273067
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 105,
            doctors: 35
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-275",
        name: "Nagarathna Hospital",
        location: {
            latitude: 12.9056092,
            longitude: 77.5426964
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 102,
            doctors: 27
        },
        capabilities: [
            "stroke",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-276",
        name: "Government Maternity Home",
        location: {
            latitude: 12.9983402,
            longitude: 77.6200927
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 59,
            doctors: 26
        },
        capabilities: [
            "poisoning",
            "trauma",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-277",
        name: "Lucid Medical Diagnostics",
        location: {
            latitude: 12.9306876,
            longitude: 77.5794541
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 35,
            doctors: 17
        },
        capabilities: [
            "trauma",
            "respiratory",
            "poisoning",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-278",
        name: "Cauvery Orthopaedic Centre",
        location: {
            latitude: 12.9984887,
            longitude: 77.5504219
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 48,
            doctors: 28
        },
        capabilities: [
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-279",
        name: "Apollo Bengaluru Cradle Limited, Jayanagar",
        location: {
            latitude: 12.9168014,
            longitude: 77.5851878
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 118,
            doctors: 27
        },
        capabilities: [
            "stroke",
            "cardiac",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-280",
        name: "Nethradhama Superspeciality Eye Hospital, Rajajinagar",
        location: {
            latitude: 12.997613,
            longitude: 77.5509423
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 77,
            doctors: 36
        },
        capabilities: [
            "trauma",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-281",
        name: "NIMHANS - Ashwini Block",
        location: {
            latitude: 12.9397588,
            longitude: 77.59445
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 43,
            doctors: 34
        },
        capabilities: [
            "trauma",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-282",
        name: "Sathya Sai Lake Side Ortho Hospital",
        location: {
            latitude: 13.0215807,
            longitude: 77.7128053
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 49,
            doctors: 14
        },
        capabilities: [
            "trauma",
            "stroke",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-283",
        name: "Comfort Multispeciality Hospital",
        location: {
            latitude: 12.9817167,
            longitude: 77.6800412
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 46,
            doctors: 29
        },
        capabilities: [
            "respiratory",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-284",
        name: "National Institute of Mental Health and Neuro Sciences",
        location: {
            latitude: 12.9400669,
            longitude: 77.5931597
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 118,
            doctors: 37
        },
        capabilities: [
            "stroke",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-285",
        name: "NBRC(National Brain Research Center)",
        location: {
            latitude: 12.9404277,
            longitude: 77.5988406
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 103,
            doctors: 38
        },
        capabilities: [
            "respiratory",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-286",
        name: "Cambridge Hospital",
        location: {
            latitude: 12.9716236,
            longitude: 77.6273835
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 23,
            doctors: 24
        },
        capabilities: [
            "respiratory",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-287",
        name: "Respigen healthcare",
        location: {
            latitude: 12.9555357,
            longitude: 77.5918347
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 30,
            doctors: 19
        },
        capabilities: [
            "trauma",
            "other",
            "poisoning",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-288",
        name: "Doctor's diagnostics Centre",
        location: {
            latitude: 13.014746,
            longitude: 77.6357881
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 81,
            doctors: 18
        },
        capabilities: [
            "poisoning",
            "stroke",
            "burn",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-289",
        name: "Hosmat Hospital",
        location: {
            latitude: 13.0080001,
            longitude: 77.5837482
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 105,
            doctors: 15
        },
        capabilities: [
            "stroke",
            "trauma",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-290",
        name: "Cloudnine Hospital Pvt. Ltd.",
        location: {
            latitude: 12.9597752,
            longitude: 77.6569127
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 94,
            doctors: 28
        },
        capabilities: [
            "other",
            "cardiac",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-291",
        name: "Subramanium Medicine Store",
        location: {
            latitude: 13.0090912,
            longitude: 77.656317
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 68,
            doctors: 12
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-292",
        name: "Chaya Super Speciality Hospital",
        location: {
            latitude: 13.0104342,
            longitude: 77.6583242
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 50,
            doctors: 11
        },
        capabilities: [
            "cardiac",
            "trauma",
            "respiratory",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-293",
        name: "Altius Hospital",
        location: {
            latitude: 12.9849537,
            longitude: 77.5569222
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 113,
            doctors: 30
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-294",
        name: "Bangalore Diabetes Hospital",
        location: {
            latitude: 12.9918415,
            longitude: 77.5968531
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 111,
            doctors: 21
        },
        capabilities: [
            "respiratory",
            "other",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-295",
        name: "NU Hospitals",
        location: {
            latitude: 13.011845,
            longitude: 77.5526061
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 98,
            doctors: 20
        },
        capabilities: [
            "burn",
            "stroke",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-296",
        name: "V. S. Achar Multispeciality Hospital",
        location: {
            latitude: 12.9472091,
            longitude: 77.5966914
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 34,
            doctors: 11
        },
        capabilities: [
            "cardiac",
            "stroke",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-297",
        name: "Nature Cure Hospital",
        location: {
            latitude: 12.933223,
            longitude: 77.5842632
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 82,
            doctors: 23
        },
        capabilities: [
            "poisoning",
            "burn",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-298",
        name: "Government Hospital",
        location: {
            latitude: 12.966103,
            longitude: 77.5549647
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 40,
            doctors: 31
        },
        capabilities: [
            "stroke",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-299",
        name: "Emergency Block , NIMHANS",
        location: {
            latitude: 12.9403849,
            longitude: 77.5945391
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 43,
            doctors: 21
        },
        capabilities: [
            "stroke",
            "trauma",
            "burn",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-300",
        name: "Usha Vikranth Diagnostic Center and Hospital",
        location: {
            latitude: 12.9138086,
            longitude: 77.5273633
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 113,
            doctors: 33
        },
        capabilities: [
            "stroke",
            "other",
            "cardiac",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-301",
        name: "Nethradhama Superspeciality Eye Hospital",
        location: {
            latitude: 12.9719805,
            longitude: 77.6474011
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 80,
            doctors: 15
        },
        capabilities: [
            "respiratory",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-302",
        name: "Kannamangala Primary Health Center",
        location: {
            latitude: 13.0308849,
            longitude: 77.7599564
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 63,
            doctors: 34
        },
        capabilities: [
            "respiratory",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-303",
        name: "Telerad RXDX Kadugodi",
        location: {
            latitude: 13.0028637,
            longitude: 77.7569157
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 74,
            doctors: 29
        },
        capabilities: [
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-304",
        name: "Care Health",
        location: {
            latitude: 13.0552027,
            longitude: 77.6028234
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 80,
            doctors: 37
        },
        capabilities: [
            "stroke",
            "trauma",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-305",
        name: "Sri Shankara Cancer Hospital And Research Centre (A Service Unit Of Sscf)",
        location: {
            latitude: 12.9542624,
            longitude: 77.5709473
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 53,
            doctors: 12
        },
        capabilities: [
            "cardiac",
            "trauma",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-306",
        name: "Vathsalya Speciality Hospital",
        location: {
            latitude: 12.9939752,
            longitude: 77.5391801
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 53,
            doctors: 24
        },
        capabilities: [
            "burn",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-307",
        name: "Lakeside Medical Centre and Hospital",
        location: {
            latitude: 12.9878631,
            longitude: 77.6177434
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 37,
            doctors: 37
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-308",
        name: "Maruthi Hospital",
        location: {
            latitude: 12.9677607,
            longitude: 77.5413282
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 62,
            doctors: 34
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-309",
        name: "Aparna Hospital",
        location: {
            latitude: 12.9362087,
            longitude: 77.616947
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 78,
            doctors: 28
        },
        capabilities: [
            "other",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-310",
        name: "Apollo Spectra Hospitals",
        location: {
            latitude: 12.9338175,
            longitude: 77.6201615
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 29,
            doctors: 35
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-311",
        name: "Sankeerthana Hospital and Fertility Center",
        location: {
            latitude: 12.9256013,
            longitude: 77.6359638
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 119,
            doctors: 31
        },
        capabilities: [
            "burn",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-312",
        name: "Jayashree Multi Specilaity Hospital",
        location: {
            latitude: 12.881611,
            longitude: 77.6260763
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 55,
            doctors: 38
        },
        capabilities: [
            "poisoning",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-313",
        name: "Bangalore Prime Hospital",
        location: {
            latitude: 13.066842,
            longitude: 77.6390545
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 41,
            doctors: 29
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-314",
        name: "CyteCare",
        location: {
            latitude: 13.118638,
            longitude: 77.6078781
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 48,
            doctors: 13
        },
        capabilities: [
            "burn",
            "stroke",
            "other",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-315",
        name: "Shiva Vision Care",
        location: {
            latitude: 12.9366526,
            longitude: 77.6277125
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 116,
            doctors: 39
        },
        capabilities: [
            "stroke",
            "respiratory",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-316",
        name: "Medical Center",
        location: {
            latitude: 13.0711049,
            longitude: 77.5781394
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 50,
            doctors: 12
        },
        capabilities: [
            "burn",
            "cardiac",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-317",
        name: "apollo medical shop",
        location: {
            latitude: 12.8437851,
            longitude: 77.6659275
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 68,
            doctors: 22
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-318",
        name: "Sujatha Hospital",
        location: {
            latitude: 12.9781293,
            longitude: 77.6372391
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 100,
            doctors: 18
        },
        capabilities: [
            "cardiac",
            "stroke",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-319",
        name: "Patil Hospital",
        location: {
            latitude: 13.011214,
            longitude: 77.6979598
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 96,
            doctors: 27
        },
        capabilities: [
            "poisoning",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-320",
        name: "The Eye Surgical Centre",
        location: {
            latitude: 12.9821954,
            longitude: 77.5493143
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 33,
            doctors: 29
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-321",
        name: "Omega Multispeciality Hospital",
        location: {
            latitude: 13.1001877,
            longitude: 77.5813432
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 37,
            doctors: 33
        },
        capabilities: [
            "other",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-322",
        name: "NDR Hospital",
        location: {
            latitude: 13.0957808,
            longitude: 77.5792872
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 74,
            doctors: 17
        },
        capabilities: [
            "burn",
            "trauma",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-323",
        name: "Venus Bone & Joint Centre",
        location: {
            latitude: 13.0665572,
            longitude: 77.59647
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 98,
            doctors: 24
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-324",
        name: "Lourdes High School",
        location: {
            latitude: 13.0182102,
            longitude: 77.540004
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 49,
            doctors: 20
        },
        capabilities: [
            "poisoning",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-325",
        name: "Boregowda Lingamma Hospital",
        location: {
            latitude: 13.016705,
            longitude: 77.539386
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 56,
            doctors: 22
        },
        capabilities: [
            "trauma",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-326",
        name: "Kanva Hospital",
        location: {
            latitude: 13.0175606,
            longitude: 77.5394308
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 46,
            doctors: 11
        },
        capabilities: [
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-327",
        name: "Kengeri Upanagara Government Hospital",
        location: {
            latitude: 12.9156896,
            longitude: 77.4808065
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 58,
            doctors: 39
        },
        capabilities: [
            "cardiac",
            "burn",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-328",
        name: "Yogananda Multi Speciality Hospital",
        location: {
            latitude: 12.9158516,
            longitude: 77.5593919
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 90,
            doctors: 23
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-329",
        name: "Dr. Agrawal's Eye Hospital",
        location: {
            latitude: 12.9998982,
            longitude: 77.5501121
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 93,
            doctors: 37
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-330",
        name: "Ashok Hospital",
        location: {
            latitude: 12.9948905,
            longitude: 77.5347984
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 34,
            doctors: 36
        },
        capabilities: [
            "trauma",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-331",
        name: "Balaji Hospital and Gastroenterology Center",
        location: {
            latitude: 12.9376087,
            longitude: 77.5666429
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 99,
            doctors: 13
        },
        capabilities: [
            "poisoning",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-332",
        name: "Abhay Hospital",
        location: {
            latitude: 12.9517481,
            longitude: 77.4939886
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 85,
            doctors: 26
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-333",
        name: "Chaitanya Hospital",
        location: {
            latitude: 13.0237316,
            longitude: 77.5941463
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 73,
            doctors: 26
        },
        capabilities: [
            "poisoning",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-334",
        name: "Dr. B. Venkatasubbarao Memorial Hospital",
        location: {
            latitude: 12.9981979,
            longitude: 77.568151
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 106,
            doctors: 10
        },
        capabilities: [
            "poisoning",
            "burn",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-335",
        name: "South City Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9497745,
            longitude: 77.5802779
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 28,
            doctors: 24
        },
        capabilities: [
            "burn",
            "other",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-336",
        name: "Sri Sai Hospital, Bengaluru Urban",
        location: {
            latitude: 13.0370143,
            longitude: 77.6238732
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 73,
            doctors: 24
        },
        capabilities: [
            "poisoning",
            "cardiac",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-337",
        name: "Jupiter Hospital And Institute Of Vascular Surgery",
        location: {
            latitude: 12.9998457,
            longitude: 77.5663653
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 23,
            doctors: 21
        },
        capabilities: [
            "poisoning",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-338",
        name: "Shreyas Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9829857,
            longitude: 77.5309655
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 30,
            doctors: 16
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-339",
        name: "Ashirwad Hospital",
        location: {
            latitude: 13.0289685,
            longitude: 77.6045479
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 84,
            doctors: 30
        },
        capabilities: [
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-340",
        name: "N.D.R. Hospital",
        location: {
            latitude: 13.0965172,
            longitude: 77.5787745
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 110,
            doctors: 22
        },
        capabilities: [
            "poisoning",
            "other",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-341",
        name: "Asha Kiran Children & Women Health Care Centre",
        location: {
            latitude: 13.0263529,
            longitude: 77.5933929
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 58,
            doctors: 26
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-342",
        name: "Mission Hospital, Bengaluru Rural",
        location: {
            latitude: 13.0744104,
            longitude: 77.7835518
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 76,
            doctors: 28
        },
        capabilities: [
            "other",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-343",
        name: "Radha Maternity and Surgical Hospital",
        location: {
            latitude: 12.9690441,
            longitude: 77.5688544
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 91,
            doctors: 33
        },
        capabilities: [
            "poisoning",
            "trauma",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-344",
        name: "Hitech Kidney Stone Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9878104,
            longitude: 77.5809833
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 102,
            doctors: 13
        },
        capabilities: [
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-345",
        name: "Sri Dhavantari Ayurveda Hoapital",
        location: {
            latitude: 12.9822186,
            longitude: 77.5599374
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 26,
            doctors: 33
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-346",
        name: "Vaidyam Hospital",
        location: {
            latitude: 12.9845512,
            longitude: 77.5528322
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 109,
            doctors: 17
        },
        capabilities: [
            "cardiac",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-347",
        name: "Suresh Hospital - Bangalore",
        location: {
            latitude: 12.9897745,
            longitude: 77.5551014
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 97,
            doctors: 16
        },
        capabilities: [
            "burn",
            "other",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-348",
        name: "Lakshmi Maternity Home",
        location: {
            latitude: 13.0058226,
            longitude: 77.5694512
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 46,
            doctors: 17
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-349",
        name: "Manjunatha Maternity Home and Surgical Centre",
        location: {
            latitude: 13.0077265,
            longitude: 77.5696993
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 51,
            doctors: 31
        },
        capabilities: [
            "cardiac",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-350",
        name: "Samprathi Eye Hospital And Squint Centre",
        location: {
            latitude: 12.9932806,
            longitude: 77.580691
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 48,
            doctors: 30
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-351",
        name: "Shankara Nethralaya Eye Hospital",
        location: {
            latitude: 13.0089953,
            longitude: 77.5406188
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 114,
            doctors: 10
        },
        capabilities: [
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-352",
        name: "Supra South City Hospital",
        location: {
            latitude: 12.8919509,
            longitude: 77.5799654
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 63,
            doctors: 16
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-353",
        name: "ChanRe Rheumatology and Immunology Center and Research",
        location: {
            latitude: 12.9992083,
            longitude: 77.550269
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 21,
            doctors: 21
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-354",
        name: "Chandana Hospital",
        location: {
            latitude: 12.9579894,
            longitude: 77.5114394
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 44,
            doctors: 18
        },
        capabilities: [
            "poisoning",
            "respiratory",
            "trauma",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-355",
        name: "J M J Hospital, Bengaluru Urban",
        location: {
            latitude: 13.0398217,
            longitude: 77.6230843
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 37,
            doctors: 32
        },
        capabilities: [
            "poisoning",
            "trauma",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-356",
        name: "G E F Eye Hospital",
        location: {
            latitude: 13.0672067,
            longitude: 77.7802707
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 106,
            doctors: 28
        },
        capabilities: [
            "cardiac",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-357",
        name: "Sri Krishna Hospital",
        location: {
            latitude: 12.9215013,
            longitude: 77.5655432
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 22,
            doctors: 17
        },
        capabilities: [
            "other",
            "cardiac",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-358",
        name: "Malleswaram Eye Day Care Hospital - Bengalore",
        location: {
            latitude: 12.9966677,
            longitude: 77.5716037
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 80,
            doctors: 17
        },
        capabilities: [
            "poisoning",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-359",
        name: "Mahaveer Eye Hospital Private Limited",
        location: {
            latitude: 12.9933551,
            longitude: 77.5729595
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 106,
            doctors: 32
        },
        capabilities: [
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-360",
        name: "Bilva Hospital",
        location: {
            latitude: 12.9989833,
            longitude: 77.5802015
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 118,
            doctors: 26
        },
        capabilities: [
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-361",
        name: "Nethradhama Superspeciality Eye Hospital, Jayanagar",
        location: {
            latitude: 12.9256932,
            longitude: 77.5773127
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 23,
            doctors: 23
        },
        capabilities: [
            "poisoning",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-362",
        name: "Dr Agarwals Eye Hospital Ltd",
        location: {
            latitude: 12.9122295,
            longitude: 77.5994906
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 50,
            doctors: 14
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-363",
        name: "Sri Venkateshwara Hospitals",
        location: {
            latitude: 12.926471,
            longitude: 77.6167399
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 115,
            doctors: 38
        },
        capabilities: [
            "burn",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-364",
        name: "Nova Specialty Surgery Center, Koramangala",
        location: {
            latitude: 12.9339097,
            longitude: 77.620208
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 30,
            doctors: 16
        },
        capabilities: [
            "other",
            "stroke",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-365",
        name: "C.S. Hospital",
        location: {
            latitude: 12.9118831,
            longitude: 77.5528805
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 24,
            doctors: 30
        },
        capabilities: [
            "cardiac",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-366",
        name: "Sri Kalabyraveshwara Swamy Ayurvedic Medical College hospital",
        location: {
            latitude: 12.9650437,
            longitude: 77.5435022
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 44,
            doctors: 36
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-367",
        name: "Anugraha Hospital, Vijayanagar",
        location: {
            latitude: 12.9765645,
            longitude: 77.5455876
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 45,
            doctors: 32
        },
        capabilities: [
            "stroke",
            "trauma",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-368",
        name: "Apple Hospital",
        location: {
            latitude: 13.103924,
            longitude: 77.5837862
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 34,
            doctors: 29
        },
        capabilities: [
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-369",
        name: "Amar Hospital",
        location: {
            latitude: 12.9711822,
            longitude: 77.5781228
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 75,
            doctors: 26
        },
        capabilities: [
            "trauma",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-370",
        name: "Retina Institute Of Karnataka",
        location: {
            latitude: 12.95727,
            longitude: 77.5640827
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 30,
            doctors: 13
        },
        capabilities: [
            "respiratory",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-371",
        name: "The Venlakh Hospital",
        location: {
            latitude: 12.9572978,
            longitude: 77.5644522
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 102,
            doctors: 28
        },
        capabilities: [
            "respiratory",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-372",
        name: "Vishwabharathi Hospital Pvt. Ltd",
        location: {
            latitude: 12.9406698,
            longitude: 77.5644596
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 45,
            doctors: 19
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-373",
        name: "Sunetra Eye Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9404548,
            longitude: 77.5578493
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 55,
            doctors: 37
        },
        capabilities: [
            "respiratory",
            "poisoning",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-374",
        name: "Sri Vivekananda Sevashrama",
        location: {
            latitude: 12.9253299,
            longitude: 77.5711893
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 107,
            doctors: 19
        },
        capabilities: [
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-375",
        name: "Saraswathi Hospital",
        location: {
            latitude: 12.9276382,
            longitude: 77.568896
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 104,
            doctors: 17
        },
        capabilities: [
            "respiratory",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-376",
        name: "Narayana Multispeciality Hospital",
        location: {
            latitude: 12.9894936,
            longitude: 77.7337486
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 96,
            doctors: 11
        },
        capabilities: [
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-377",
        name: "National Institute of Mental Health and Neuro Sciences",
        location: {
            latitude: 12.9386321,
            longitude: 77.5944105
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 48,
            doctors: 30
        },
        capabilities: [
            "trauma",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-378",
        name: "Netraspandana Healthcare and Research Pvt. Ltd",
        location: {
            latitude: 12.9291283,
            longitude: 77.5461361
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 42,
            doctors: 27
        },
        capabilities: [
            "poisoning",
            "cardiac",
            "respiratory",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-379",
        name: "North City CT Scan",
        location: {
            latitude: 13.0945892,
            longitude: 77.594104
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 93,
            doctors: 21
        },
        capabilities: [
            "poisoning",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-380",
        name: "Nu Trust",
        location: {
            latitude: 12.9176216,
            longitude: 77.5550705
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 39,
            doctors: 17
        },
        capabilities: [
            "respiratory",
            "cardiac",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-381",
        name: "Padmavathi Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9817311,
            longitude: 77.5333714
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 114,
            doctors: 34
        },
        capabilities: [
            "poisoning",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-382",
        name: "Panchamukhi Specialityu Hospital",
        location: {
            latitude: 12.9957177,
            longitude: 77.5031644
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 94,
            doctors: 35
        },
        capabilities: [
            "other",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-383",
        name: "Sri Lakshmi Multi Speciality Hospital",
        location: {
            latitude: 12.9881868,
            longitude: 77.5087273
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 36,
            doctors: 30
        },
        capabilities: [
            "other",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-384",
        name: "K C Raju Multi Speciality Hospital",
        location: {
            latitude: 13.0090828,
            longitude: 77.6235594
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 69,
            doctors: 18
        },
        capabilities: [
            "respiratory",
            "poisoning",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-385",
        name: "Ring Road Hospital",
        location: {
            latitude: 12.9278657,
            longitude: 77.5519297
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 56,
            doctors: 20
        },
        capabilities: [
            "other",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-386",
        name: "Vasan Eye Care Hospital, Bannergatta Road",
        location: {
            latitude: 12.8822813,
            longitude: 77.5957945
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 44,
            doctors: 11
        },
        capabilities: [
            "burn",
            "other",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-387",
        name: "Varalakshmi Hospital",
        location: {
            latitude: 12.924624,
            longitude: 77.6170966
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 112,
            doctors: 25
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-388",
        name: "Kala Hospital",
        location: {
            latitude: 13.0223669,
            longitude: 77.5587304
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 69,
            doctors: 16
        },
        capabilities: [
            "poisoning",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-389",
        name: "Shekhar Hospital, Jayanagar",
        location: {
            latitude: 12.917589,
            longitude: 77.5948906
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 67,
            doctors: 34
        },
        capabilities: [
            "poisoning",
            "trauma",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-390",
        name: "Rajalakshmi Hospital",
        location: {
            latitude: 13.0842019,
            longitude: 77.5308891
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 85,
            doctors: 18
        },
        capabilities: [
            "poisoning",
            "other",
            "trauma",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-391",
        name: "Vasan Eye Care Hospital, Sarakki",
        location: {
            latitude: 12.9103393,
            longitude: 77.5732398
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 72,
            doctors: 35
        },
        capabilities: [
            "cardiac",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-392",
        name: "Lions Airport City Hospital",
        location: {
            latitude: 12.9551501,
            longitude: 77.7051643
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 23,
            doctors: 21
        },
        capabilities: [
            "respiratory",
            "trauma",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-393",
        name: "Mahanth Hospital",
        location: {
            latitude: 12.9079615,
            longitude: 77.6235715
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 46,
            doctors: 39
        },
        capabilities: [
            "respiratory",
            "burn",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-394",
        name: "Sunayana Eye Hospital",
        location: {
            latitude: 12.9255233,
            longitude: 77.5937748
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 54,
            doctors: 14
        },
        capabilities: [
            "respiratory",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-395",
        name: "Lakshmi Hospital, Ganganagar",
        location: {
            latitude: 13.024837,
            longitude: 77.592089
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 33,
            doctors: 33
        },
        capabilities: [
            "respiratory",
            "other",
            "cardiac",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-396",
        name: "Lokhande S Hospital",
        location: {
            latitude: 13.0186045,
            longitude: 77.6479433
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 113,
            doctors: 27
        },
        capabilities: [
            "respiratory",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-397",
        name: "Dr. T.V.Ramesh Piles Hospital",
        location: {
            latitude: 13.0250141,
            longitude: 77.5856289
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 87,
            doctors: 32
        },
        capabilities: [
            "stroke",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-398",
        name: "Dr Kamini Rao Hospital(A Unit Of Bacc Health Care Pvt Ltd)",
        location: {
            latitude: 12.9163994,
            longitude: 77.5847384
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 48,
            doctors: 36
        },
        capabilities: [
            "respiratory",
            "burn",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-399",
        name: "HCG",
        location: {
            latitude: 12.9605309,
            longitude: 77.592659
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 77,
            doctors: 33
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-400",
        name: "Dr Ambedkar Medical College Hospital",
        location: {
            latitude: 13.0218188,
            longitude: 77.613084
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 59,
            doctors: 14
        },
        capabilities: [
            "burn",
            "cardiac",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-401",
        name: "Supriya Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9929043,
            longitude: 77.5588015
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 91,
            doctors: 25
        },
        capabilities: [
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-402",
        name: "Manju Sree Hospital",
        location: {
            latitude: 13.0212406,
            longitude: 77.6070739
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 41,
            doctors: 26
        },
        capabilities: [
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-403",
        name: "Raj Mahal Vilas Hospital",
        location: {
            latitude: 13.0322819,
            longitude: 77.5770459
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 62,
            doctors: 32
        },
        capabilities: [
            "other",
            "stroke",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-404",
        name: "Devi Eye Hospital",
        location: {
            latitude: 12.9412109,
            longitude: 77.6238987
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 59,
            doctors: 38
        },
        capabilities: [
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-405",
        name: "Essential Hospital",
        location: {
            latitude: 12.974865,
            longitude: 77.5096312
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 94,
            doctors: 22
        },
        capabilities: [
            "trauma",
            "cardiac",
            "other",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-406",
        name: "Shree Vijayalakshmi Hospital and Trauma Centre",
        location: {
            latitude: 13.0373572,
            longitude: 77.6409059
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 62,
            doctors: 24
        },
        capabilities: [
            "cardiac",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-407",
        name: "Kalasa Maternity Home",
        location: {
            latitude: 12.9548208,
            longitude: 77.5672585
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 112,
            doctors: 35
        },
        capabilities: [
            "trauma",
            "burn",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-408",
        name: "Sidvin Hospital Pvt Ltd",
        location: {
            latitude: 12.982442,
            longitude: 77.5493681
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 48,
            doctors: 15
        },
        capabilities: [
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-409",
        name: "Abhilash Hospital And Sara Rehabilitation Centre",
        location: {
            latitude: 12.9246384,
            longitude: 77.5509238
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 110,
            doctors: 14
        },
        capabilities: [
            "burn",
            "other",
            "respiratory",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-410",
        name: "HCG, Koramangala",
        location: {
            latitude: 12.9343279,
            longitude: 77.6228848
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 82,
            doctors: 14
        },
        capabilities: [
            "cardiac",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-411",
        name: "Ganesh Nursing Home, Bengaluru Urban",
        location: {
            latitude: 12.8957636,
            longitude: 77.6330289
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 55,
            doctors: 29
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-412",
        name: "Kavya Hospital",
        location: {
            latitude: 12.8987442,
            longitude: 77.6263127
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 49,
            doctors: 22
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-413",
        name: "Sg Hospital",
        location: {
            latitude: 12.9275311,
            longitude: 77.5457901
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 44,
            doctors: 10
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-414",
        name: "Place Guttahalli Maternity Home",
        location: {
            latitude: 12.9988238,
            longitude: 77.5819892
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 64,
            doctors: 36
        },
        capabilities: [
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-415",
        name: "Phoenix Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9608027,
            longitude: 77.5911717
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 95,
            doctors: 24
        },
        capabilities: [
            "other",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-416",
        name: "Shreya Hospital, Bengaluru Rural",
        location: {
            latitude: 12.9215104,
            longitude: 77.4832503
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 70,
            doctors: 12
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-417",
        name: "Vasan Eye Care Hospital, Banaswadi",
        location: {
            latitude: 13.0241341,
            longitude: 77.6335546
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 62,
            doctors: 34
        },
        capabilities: [
            "other",
            "cardiac",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-418",
        name: "Sri Annapoorneshwari Hospital",
        location: {
            latitude: 12.9255704,
            longitude: 77.4857756
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 108,
            doctors: 28
        },
        capabilities: [
            "respiratory",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-419",
        name: "Vasan Eye Care Hospital, R.T.Nagar",
        location: {
            latitude: 13.0251833,
            longitude: 77.5920609
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 63,
            doctors: 15
        },
        capabilities: [
            "respiratory",
            "cardiac",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-420",
        name: "Kims Hospital and Research Centre",
        location: {
            latitude: 12.9563016,
            longitude: 77.5747874
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 30,
            doctors: 33
        },
        capabilities: [
            "poisoning",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-421",
        name: "Karthik Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9489406,
            longitude: 77.5949925
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 114,
            doctors: 13
        },
        capabilities: [
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-422",
        name: "Bangalore Kidney Stones Hospital",
        location: {
            latitude: 12.9670215,
            longitude: 77.5892667
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 34,
            doctors: 19
        },
        capabilities: [
            "poisoning",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-423",
        name: "Sree Lakshmi Hospital",
        location: {
            latitude: 12.9825937,
            longitude: 77.6814736
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 95,
            doctors: 21
        },
        capabilities: [
            "poisoning",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-424",
        name: "Abhaya Eye Hospital, Super Speciality Eye Care Centre",
        location: {
            latitude: 12.9271131,
            longitude: 77.5471291
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 67,
            doctors: 32
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-425",
        name: "Mediscope Hospital Private Limited",
        location: {
            latitude: 12.9994472,
            longitude: 77.6162584
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 92,
            doctors: 35
        },
        capabilities: [
            "cardiac",
            "other",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-426",
        name: "Medi Derma Hospital",
        location: {
            latitude: 13.0555559,
            longitude: 77.6517145
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 74,
            doctors: 18
        },
        capabilities: [
            "stroke",
            "trauma",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-427",
        name: "Mathru Hospital - Bangalore",
        location: {
            latitude: 12.9110975,
            longitude: 77.4806057
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 54,
            doctors: 31
        },
        capabilities: [
            "respiratory",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-428",
        name: "Manjushree Speciality Hospital",
        location: {
            latitude: 12.9825845,
            longitude: 77.6124926
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 63,
            doctors: 28
        },
        capabilities: [
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-429",
        name: "Namratha Nursing And Maternity Home",
        location: {
            latitude: 13.0045747,
            longitude: 77.5432728
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 98,
            doctors: 20
        },
        capabilities: [
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-430",
        name: "The Pulse Multi Speciality Hospital",
        location: {
            latitude: 12.9424801,
            longitude: 77.5473283
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 112,
            doctors: 31
        },
        capabilities: [
            "trauma",
            "burn",
            "stroke",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-431",
        name: "Popular Hospital",
        location: {
            latitude: 12.9514854,
            longitude: 77.5703564
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 63,
            doctors: 11
        },
        capabilities: [
            "poisoning",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-432",
        name: "Gavipuramguttahalli Maternity Home",
        location: {
            latitude: 12.9526505,
            longitude: 77.5548633
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 54,
            doctors: 10
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-433",
        name: "Ayurseva Hospital",
        location: {
            latitude: 13.0139247,
            longitude: 77.6640775
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 45,
            doctors: 10
        },
        capabilities: [
            "burn",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-434",
        name: "Spine Care And Ortho Care Hospital",
        location: {
            latitude: 12.9745134,
            longitude: 77.5493883
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 41,
            doctors: 23
        },
        capabilities: [
            "poisoning",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-435",
        name: "Vijayashree Hospitals",
        location: {
            latitude: 12.8579673,
            longitude: 77.5892687
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 36,
            doctors: 17
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-436",
        name: "Tanmay Hospital",
        location: {
            latitude: 12.9733764,
            longitude: 77.5474034
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 94,
            doctors: 34
        },
        capabilities: [
            "burn",
            "other",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-437",
        name: "Aayug Multi Speciality Hospital",
        location: {
            latitude: 12.9651587,
            longitude: 77.7150508
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 60,
            doctors: 21
        },
        capabilities: [
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-438",
        name: "MGA Hospital",
        location: {
            latitude: 12.9568547,
            longitude: 77.7002262
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 100,
            doctors: 13
        },
        capabilities: [
            "stroke",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-439",
        name: "Blossom Hospital",
        location: {
            latitude: 12.8705439,
            longitude: 77.6595353
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 87,
            doctors: 37
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-440",
        name: "Bhagavathi Multi Speciality Hospital",
        location: {
            latitude: 12.9160636,
            longitude: 77.6308219
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 56,
            doctors: 17
        },
        capabilities: [
            "other",
            "cardiac",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-441",
        name: "Sri Sai Ram Hospital - Bangalore",
        location: {
            latitude: 12.9144587,
            longitude: 77.6003156
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 115,
            doctors: 18
        },
        capabilities: [
            "burn",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-442",
        name: "Susheel Hospital",
        location: {
            latitude: 12.9645006,
            longitude: 77.5427189
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 28,
            doctors: 31
        },
        capabilities: [
            "trauma",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-443",
        name: "Dhanush Hospital",
        location: {
            latitude: 12.9654318,
            longitude: 77.52312
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 115,
            doctors: 22
        },
        capabilities: [
            "stroke",
            "other",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-444",
        name: "Shreyas Maternity Home",
        location: {
            latitude: 13.074556,
            longitude: 77.7821477
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 101,
            doctors: 23
        },
        capabilities: [
            "cardiac",
            "other",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-445",
        name: "Sadhana Eye Hospital, Bengaluru Urban",
        location: {
            latitude: 12.970023,
            longitude: 77.6307987
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 60,
            doctors: 16
        },
        capabilities: [
            "burn",
            "respiratory",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-446",
        name: "Av Hospital",
        location: {
            latitude: 12.938853,
            longitude: 77.5786096
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 43,
            doctors: 23
        },
        capabilities: [
            "poisoning",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-447",
        name: "Balaji Hospital, K.H. Ranganath Colony",
        location: {
            latitude: 12.9632506,
            longitude: 77.5602901
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 100,
            doctors: 32
        },
        capabilities: [
            "poisoning",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-448",
        name: "Banasawadi Hospital",
        location: {
            latitude: 13.0205082,
            longitude: 77.6509675
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 32,
            doctors: 31
        },
        capabilities: [
            "trauma",
            "stroke",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-449",
        name: "Bangalore Eye Hospital And Retina Centre",
        location: {
            latitude: 13.0221036,
            longitude: 77.6387729
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 29,
            doctors: 12
        },
        capabilities: [
            "burn",
            "trauma",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-450",
        name: "Belaku Eye Hospital",
        location: {
            latitude: 12.9110766,
            longitude: 77.4800451
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 63,
            doctors: 22
        },
        capabilities: [
            "respiratory",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-451",
        name: "Bhavatprabhu Hospitals Pvt Limited",
        location: {
            latitude: 12.9670615,
            longitude: 77.5903161
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 93,
            doctors: 11
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-452",
        name: "Nikad Ortho Centre",
        location: {
            latitude: 12.975802,
            longitude: 77.6184806
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 67,
            doctors: 31
        },
        capabilities: [
            "stroke",
            "other",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-453",
        name: "Raksha Multispeciality Hospital",
        location: {
            latitude: 13.0195733,
            longitude: 77.5419559
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 62,
            doctors: 31
        },
        capabilities: [
            "other",
            "trauma",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-454",
        name: "Cambridge Hospital",
        location: {
            latitude: 13.0195955,
            longitude: 77.5419813
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 26,
            doctors: 11
        },
        capabilities: [
            "trauma",
            "poisoning",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-455",
        name: "Prasad Hospital, Bengaluru Urban",
        location: {
            latitude: 13.0983472,
            longitude: 77.5773677
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 74,
            doctors: 20
        },
        capabilities: [
            "other",
            "respiratory",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-456",
        name: "Saranalaya Hospital",
        location: {
            latitude: 13.1215236,
            longitude: 77.6126106
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 35,
            doctors: 15
        },
        capabilities: [
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-457",
        name: "Azad Nagar Maternity Home",
        location: {
            latitude: 12.9559644,
            longitude: 77.5485635
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 119,
            doctors: 16
        },
        capabilities: [
            "respiratory",
            "poisoning",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-458",
        name: "Gunasheela Surgical and Maternity Hospital",
        location: {
            latitude: 12.9403012,
            longitude: 77.5764705
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 30,
            doctors: 36
        },
        capabilities: [
            "poisoning",
            "burn",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-459",
        name: "Excel Care Hospital",
        location: {
            latitude: 12.9207314,
            longitude: 77.5736019
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 98,
            doctors: 20
        },
        capabilities: [
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-460",
        name: "Vasan Eye Care Hospital, Jayanagar",
        location: {
            latitude: 12.9292015,
            longitude: 77.5819811
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 74,
            doctors: 12
        },
        capabilities: [
            "other",
            "cardiac",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-461",
        name: "Hi Tech Kidney Stone Hospital",
        location: {
            latitude: 12.9271389,
            longitude: 77.579028
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 111,
            doctors: 20
        },
        capabilities: [
            "cardiac",
            "burn",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-462",
        name: "Dr. Vidyananda's Surgery and Dia Centre",
        location: {
            latitude: 12.9242515,
            longitude: 77.573217
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 88,
            doctors: 24
        },
        capabilities: [
            "trauma",
            "burn",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-463",
        name: "Srushti Hospital, Bengaluru Rural",
        location: {
            latitude: 12.8981572,
            longitude: 77.6207364
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 70,
            doctors: 17
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-464",
        name: "Parimala Speciality Hospital",
        location: {
            latitude: 12.9004567,
            longitude: 77.6005474
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 116,
            doctors: 22
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-465",
        name: "Banashankari Hospital",
        location: {
            latitude: 12.8443653,
            longitude: 77.583809
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 48,
            doctors: 35
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-466",
        name: "R K Hospital, Bengaluru Urban",
        location: {
            latitude: 13.0138123,
            longitude: 77.6354731
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 55,
            doctors: 13
        },
        capabilities: [
            "respiratory",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-467",
        name: "Prasad Eye Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9356703,
            longitude: 77.6079905
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 32,
            doctors: 31
        },
        capabilities: [
            "poisoning",
            "cardiac",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-468",
        name: "Unity Lifline Hospital Pvt Ltd",
        location: {
            latitude: 12.9819768,
            longitude: 77.5108275
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 55,
            doctors: 33
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-469",
        name: "J.P.Nursing Home",
        location: {
            latitude: 13.0098352,
            longitude: 77.5384723
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 57,
            doctors: 23
        },
        capabilities: [
            "burn",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-470",
        name: "North Side Health Centre",
        location: {
            latitude: 13.0267995,
            longitude: 77.5870813
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 97,
            doctors: 24
        },
        capabilities: [
            "burn",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-471",
        name: "Anugrahaa Hospital",
        location: {
            latitude: 12.8548947,
            longitude: 77.6681162
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 107,
            doctors: 24
        },
        capabilities: [
            "poisoning",
            "burn",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-472",
        name: "Amrutha Hospital",
        location: {
            latitude: 13.0657486,
            longitude: 77.5992653
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 34,
            doctors: 39
        },
        capabilities: [
            "trauma",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-473",
        name: "Unity Hospital, Bengaluru Urban",
        location: {
            latitude: 12.910823,
            longitude: 77.5207892
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 38,
            doctors: 26
        },
        capabilities: [
            "other",
            "stroke",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-474",
        name: "Dr Chaitanyas Dental Care & Implant Centre",
        location: {
            latitude: 12.9675989,
            longitude: 77.6565533
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 93,
            doctors: 20
        },
        capabilities: [
            "burn",
            "poisoning",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-475",
        name: "Kareem E.N.T and Multispeciality Centre",
        location: {
            latitude: 12.9188948,
            longitude: 77.6058905
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 86,
            doctors: 19
        },
        capabilities: [
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-476",
        name: "HK Hospital",
        location: {
            latitude: 12.9085981,
            longitude: 77.4784157
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 86,
            doctors: 24
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-477",
        name: "Chinmaya Narayana Super Specialty Centre",
        location: {
            latitude: 12.9777106,
            longitude: 77.6459773
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 52,
            doctors: 24
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-478",
        name: "Jyothi The Lasik Vision Centre",
        location: {
            latitude: 12.9496114,
            longitude: 77.5790786
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 92,
            doctors: 17
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-479",
        name: "S.S.G. Hospital",
        location: {
            latitude: 12.9868695,
            longitude: 77.4794832
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 37,
            doctors: 30
        },
        capabilities: [
            "trauma",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-480",
        name: "Bengaluru West Lions Hospital",
        location: {
            latitude: 12.9563042,
            longitude: 77.5830996
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 102,
            doctors: 33
        },
        capabilities: [
            "other",
            "respiratory",
            "trauma",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-481",
        name: "Vijayanagar Hospital",
        location: {
            latitude: 12.9716291,
            longitude: 77.5371969
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 87,
            doctors: 37
        },
        capabilities: [
            "other",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-482",
        name: "Abhinava Eye Hospital",
        location: {
            latitude: 12.9550181,
            longitude: 77.5683897
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 80,
            doctors: 12
        },
        capabilities: [
            "other",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-483",
        name: "North Star Maternity and Nursing Home",
        location: {
            latitude: 12.9067079,
            longitude: 77.5849275
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 50,
            doctors: 31
        },
        capabilities: [
            "respiratory",
            "burn",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-484",
        name: "Punarjyoti Eye Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9685305,
            longitude: 77.5843965
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 60,
            doctors: 24
        },
        capabilities: [
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-485",
        name: "Sundar Hospital",
        location: {
            latitude: 13.0080166,
            longitude: 77.6221479
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 29,
            doctors: 12
        },
        capabilities: [
            "stroke",
            "cardiac",
            "other",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-486",
        name: "Sri Ramakrishna Hospital, Bengaluru Urban",
        location: {
            latitude: 13.0121705,
            longitude: 77.6961802
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 65,
            doctors: 39
        },
        capabilities: [
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-487",
        name: "Sri Venkateshwara Eye Hospital",
        location: {
            latitude: 13.0423919,
            longitude: 77.5136653
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 26,
            doctors: 17
        },
        capabilities: [
            "trauma",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-488",
        name: "V Care Hospital",
        location: {
            latitude: 13.015884,
            longitude: 77.5973475
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 48,
            doctors: 37
        },
        capabilities: [
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-489",
        name: "A.M. Hospital",
        location: {
            latitude: 12.9601022,
            longitude: 77.5315556
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 82,
            doctors: 29
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-490",
        name: "Divya Drishti Eye Hospital, Vijayanagar",
        location: {
            latitude: 12.9586907,
            longitude: 77.5352668
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 62,
            doctors: 26
        },
        capabilities: [
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-491",
        name: "Shridevi Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9617045,
            longitude: 77.5217172
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 83,
            doctors: 28
        },
        capabilities: [
            "poisoning",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-492",
        name: "Srinivasa Eye Hospital",
        location: {
            latitude: 13.0147224,
            longitude: 77.6515616
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 73,
            doctors: 14
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-493",
        name: "Spandana Hospital And Medical Centre",
        location: {
            latitude: 13.0112166,
            longitude: 77.6743939
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 95,
            doctors: 34
        },
        capabilities: [
            "burn",
            "poisoning",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-494",
        name: "Sreeniwasa Hospital",
        location: {
            latitude: 12.9732706,
            longitude: 77.5725357
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 44,
            doctors: 20
        },
        capabilities: [
            "poisoning",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-495",
        name: "Ashraya Medinova Pvt Ltd",
        location: {
            latitude: 12.988865,
            longitude: 77.5078006
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 32,
            doctors: 27
        },
        capabilities: [
            "burn",
            "poisoning",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-496",
        name: "Magadi Road Maternity Home",
        location: {
            latitude: 12.9741253,
            longitude: 77.561823
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 112,
            doctors: 25
        },
        capabilities: [
            "cardiac",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-497",
        name: "Pristine Hospital",
        location: {
            latitude: 12.9980009,
            longitude: 77.5432779
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 101,
            doctors: 21
        },
        capabilities: [
            "trauma",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-498",
        name: "Dr Zamindar's Micro Surgical Eye Centre",
        location: {
            latitude: 13.0021978,
            longitude: 77.6329015
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 23,
            doctors: 17
        },
        capabilities: [
            "respiratory",
            "cardiac",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-499",
        name: "K.T.G. Hospital",
        location: {
            latitude: 13.0004769,
            longitude: 77.5054027
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 97,
            doctors: 14
        },
        capabilities: [
            "poisoning",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-500",
        name: "Vasan Eye Care Hospital",
        location: {
            latitude: 12.8980516,
            longitude: 77.6339279
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 47,
            doctors: 31
        },
        capabilities: [
            "poisoning",
            "stroke",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-501",
        name: "Health Cottage Hospital",
        location: {
            latitude: 12.9709143,
            longitude: 77.6321116
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 83,
            doctors: 10
        },
        capabilities: [
            "poisoning",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-502",
        name: "Samastha Hospitals Pvt Ltd",
        location: {
            latitude: 12.89708,
            longitude: 77.5473364
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 76,
            doctors: 11
        },
        capabilities: [
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-503",
        name: "Poornima Hospital",
        location: {
            latitude: 13.0263344,
            longitude: 77.595128
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 65,
            doctors: 25
        },
        capabilities: [
            "poisoning",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-504",
        name: "S.N. Hospital",
        location: {
            latitude: 13.0357404,
            longitude: 77.7347061
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 64,
            doctors: 24
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-505",
        name: "Dr.Zamindar Microsurgical Eye Centre",
        location: {
            latitude: 13.0178594,
            longitude: 77.6547577
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 108,
            doctors: 33
        },
        capabilities: [
            "stroke",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-506",
        name: "Good Shepherd Hospital",
        location: {
            latitude: 13.0328036,
            longitude: 77.633289
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 79,
            doctors: 34
        },
        capabilities: [
            "cardiac",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-507",
        name: "Dr.Agarwal Eye Hospital, Frazer Town, Bangalore",
        location: {
            latitude: 12.9960196,
            longitude: 77.6128413
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 29,
            doctors: 12
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-508",
        name: "Mamta Hospital, Bengaluru Rural",
        location: {
            latitude: 13.0377564,
            longitude: 77.5744454
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 30,
            doctors: 28
        },
        capabilities: [
            "poisoning",
            "stroke",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-509",
        name: "S. J. Hospital",
        location: {
            latitude: 13.0360827,
            longitude: 77.575065
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 61,
            doctors: 34
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-510",
        name: "Republic Hospital",
        location: {
            latitude: 12.964162,
            longitude: 77.5982255
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 28,
            doctors: 11
        },
        capabilities: [
            "poisoning",
            "respiratory",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-511",
        name: "R.R. Hospital and Trauma Centre",
        location: {
            latitude: 12.9074269,
            longitude: 77.5716318
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 104,
            doctors: 38
        },
        capabilities: [
            "other",
            "trauma",
            "stroke",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-512",
        name: "Geetha Hospital",
        location: {
            latitude: 13.0357169,
            longitude: 77.7351701
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 60,
            doctors: 19
        },
        capabilities: [
            "trauma",
            "poisoning",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-513",
        name: "Suresh Hospital, Bengaluru Urban",
        location: {
            latitude: 13.0080397,
            longitude: 77.6971089
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 99,
            doctors: 15
        },
        capabilities: [
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-514",
        name: "Sri Ram Netralaya and Surgical Centre",
        location: {
            latitude: 13.0088071,
            longitude: 77.6948659
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 87,
            doctors: 15
        },
        capabilities: [
            "poisoning",
            "respiratory",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-515",
        name: "Patil Hospital, Bengaluru Urban",
        location: {
            latitude: 13.0090854,
            longitude: 77.6969567
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 116,
            doctors: 28
        },
        capabilities: [
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-516",
        name: "Sri Sai Eye Hospital",
        location: {
            latitude: 13.011968,
            longitude: 77.6659168
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 83,
            doctors: 11
        },
        capabilities: [
            "other",
            "burn",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-517",
        name: "Sri Ram Speciality Hospital",
        location: {
            latitude: 12.9543777,
            longitude: 77.6209764
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 52,
            doctors: 32
        },
        capabilities: [
            "stroke",
            "trauma",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-518",
        name: "Zion Hospital And Research Centre Pvt.Ltd.",
        location: {
            latitude: 13.0149675,
            longitude: 77.6354957
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 26,
            doctors: 31
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-519",
        name: "Jai Maruthi Hospital",
        location: {
            latitude: 13.0068811,
            longitude: 77.5055636
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 107,
            doctors: 37
        },
        capabilities: [
            "respiratory",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-520",
        name: "Institute Of Nephro Urology hospital",
        location: {
            latitude: 12.9619528,
            longitude: 77.5728562
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 107,
            doctors: 12
        },
        capabilities: [
            "poisoning",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-521",
        name: "Well Spring hospital",
        location: {
            latitude: 12.9425676,
            longitude: 77.6224349
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 116,
            doctors: 21
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-522",
        name: "Aaroyha Mandir Hospital",
        location: {
            latitude: 13.0105038,
            longitude: 77.5502452
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 40,
            doctors: 28
        },
        capabilities: [
            "trauma",
            "poisoning",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-523",
        name: "Punya Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9862161,
            longitude: 77.5374853
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 58,
            doctors: 29
        },
        capabilities: [
            "trauma",
            "poisoning",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-524",
        name: "Vijaya Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9418827,
            longitude: 77.48376
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 22,
            doctors: 23
        },
        capabilities: [
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-525",
        name: "Sandhyashree Hospital",
        location: {
            latitude: 12.9761802,
            longitude: 77.5261763
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 113,
            doctors: 32
        },
        capabilities: [
            "poisoning",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-526",
        name: "Dr. Sailaja's Super Speciality Eye Hospital",
        location: {
            latitude: 13.0276736,
            longitude: 77.6614188
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 93,
            doctors: 15
        },
        capabilities: [
            "cardiac",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-527",
        name: "Hillside Hospital",
        location: {
            latitude: 12.9162753,
            longitude: 77.5589544
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 100,
            doctors: 18
        },
        capabilities: [
            "poisoning",
            "cardiac",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-528",
        name: "Pd Hinduja Sindhi Hospital",
        location: {
            latitude: 12.9646359,
            longitude: 77.5926509
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 115,
            doctors: 13
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-529",
        name: "Sri Ranga Arogyadhama",
        location: {
            latitude: 12.9986239,
            longitude: 77.542782
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 65,
            doctors: 32
        },
        capabilities: [
            "burn",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-530",
        name: "Brinda Hospital",
        location: {
            latitude: 12.978053,
            longitude: 77.5115959
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 92,
            doctors: 18
        },
        capabilities: [
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-531",
        name: "Sankalpa Hospital",
        location: {
            latitude: 12.95119,
            longitude: 77.4918039
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 52,
            doctors: 14
        },
        capabilities: [
            "poisoning",
            "cardiac",
            "trauma",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-532",
        name: "Deepashri Hospital",
        location: {
            latitude: 12.9705902,
            longitude: 77.5108503
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 40,
            doctors: 29
        },
        capabilities: [
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-533",
        name: "Rotary Eye Hospital (A Unit Of Bangalore North Rotary Trust)",
        location: {
            latitude: 12.9817233,
            longitude: 77.5549364
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 41,
            doctors: 15
        },
        capabilities: [
            "other",
            "poisoning",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-534",
        name: "Acharya Tulsi Jain Hospital",
        location: {
            latitude: 13.0218344,
            longitude: 77.5567093
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 114,
            doctors: 23
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-535",
        name: "Get Well Hospital",
        location: {
            latitude: 12.9526616,
            longitude: 77.61503
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 38,
            doctors: 21
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-536",
        name: "Premier Hospital",
        location: {
            latitude: 13.0241863,
            longitude: 77.5960574
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 38,
            doctors: 31
        },
        capabilities: [
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-537",
        name: "Gurukripa Hospital and Health Care Centre",
        location: {
            latitude: 13.0001802,
            longitude: 77.5461146
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 45,
            doctors: 16
        },
        capabilities: [
            "poisoning",
            "burn",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-538",
        name: "Avian Medicare and Research Centre",
        location: {
            latitude: 13.0269276,
            longitude: 77.6227882
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 96,
            doctors: 37
        },
        capabilities: [
            "cardiac",
            "trauma",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-539",
        name: "Vinayaka Health Care and Maternity Home",
        location: {
            latitude: 12.8919999,
            longitude: 77.6257829
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 31,
            doctors: 33
        },
        capabilities: [
            "stroke",
            "poisoning",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-540",
        name: "Little Flower Hospital",
        location: {
            latitude: 13.0113204,
            longitude: 77.6771966
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 119,
            doctors: 25
        },
        capabilities: [
            "other",
            "burn",
            "poisoning",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-541",
        name: "Venkateswara Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9543465,
            longitude: 77.5755649
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 84,
            doctors: 17
        },
        capabilities: [
            "cardiac",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-542",
        name: "Sai Baba Hospital",
        location: {
            latitude: 13.0093599,
            longitude: 77.5222108
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 100,
            doctors: 21
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-543",
        name: "Metro Hospital, Bengaluru Rural",
        location: {
            latitude: 12.8914666,
            longitude: 77.5612113
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 65,
            doctors: 12
        },
        capabilities: [
            "respiratory",
            "other",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-544",
        name: "Madhu Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9783164,
            longitude: 77.5429603
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 27,
            doctors: 35
        },
        capabilities: [
            "other",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-545",
        name: "Al- Habeeb Hospital",
        location: {
            latitude: 13.0236062,
            longitude: 77.6196139
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 73,
            doctors: 19
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-546",
        name: "Santhigiri Ayurveda and Siddha Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9439008,
            longitude: 77.6065864
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 64,
            doctors: 17
        },
        capabilities: [
            "burn",
            "cardiac",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-547",
        name: "Padmashree Diagnostics",
        location: {
            latitude: 12.9745983,
            longitude: 77.5436792
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 77,
            doctors: 27
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-548",
        name: "Venus MultiSpeciality Hospital",
        location: {
            latitude: 12.9721779,
            longitude: 77.6807872
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 45,
            doctors: 16
        },
        capabilities: [
            "burn",
            "cardiac",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-549",
        name: "Ramakrishna Hospital",
        location: {
            latitude: 12.8541208,
            longitude: 77.6624811
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 81,
            doctors: 27
        },
        capabilities: [
            "respiratory",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-550",
        name: "Roopena Agrahara Government Hospital",
        location: {
            latitude: 12.9102142,
            longitude: 77.6244654
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 52,
            doctors: 12
        },
        capabilities: [
            "cardiac",
            "trauma",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-551",
        name: "Government Hospital, Gunjur",
        location: {
            latitude: 12.922327,
            longitude: 77.736038
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 34,
            doctors: 25
        },
        capabilities: [
            "stroke",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-552",
        name: "Thippenalli Government Hospital",
        location: {
            latitude: 13.031132,
            longitude: 77.483923
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 100,
            doctors: 35
        },
        capabilities: [
            "stroke",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-553",
        name: "Laggere Government Hospital",
        location: {
            latitude: 13.009817,
            longitude: 77.5231852
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 35,
            doctors: 29
        },
        capabilities: [
            "respiratory",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-554",
        name: "Seegehalli Government Hospital",
        location: {
            latitude: 13.0164321,
            longitude: 77.7169887
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 72,
            doctors: 35
        },
        capabilities: [
            "respiratory",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-555",
        name: "Ullalu Government Hospital",
        location: {
            latitude: 12.9629127,
            longitude: 77.4751834
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 104,
            doctors: 29
        },
        capabilities: [
            "poisoning",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-556",
        name: "K.C. General Hospital",
        location: {
            latitude: 12.993382,
            longitude: 77.5694167
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 66,
            doctors: 15
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-557",
        name: "Government Hospital, Budigere",
        location: {
            latitude: 13.1376521,
            longitude: 77.744809
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 78,
            doctors: 10
        },
        capabilities: [
            "burn",
            "trauma",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-558",
        name: "NELAMAHESHWARI Government Hospital",
        location: {
            latitude: 13.049152,
            longitude: 77.510442
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 81,
            doctors: 21
        },
        capabilities: [
            "cardiac",
            "poisoning",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-559",
        name: "Sai Hospital",
        location: {
            latitude: 13.0701337,
            longitude: 77.6329103
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 75,
            doctors: 31
        },
        capabilities: [
            "stroke",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-560",
        name: "Sree Ranga Hospital",
        location: {
            latitude: 12.9358669,
            longitude: 77.4927128
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 53,
            doctors: 25
        },
        capabilities: [
            "burn",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-561",
        name: "Cure Hospital",
        location: {
            latitude: 13.0324318,
            longitude: 77.6085263
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 101,
            doctors: 15
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-562",
        name: "Yashas Neurocare",
        location: {
            latitude: 12.9853993,
            longitude: 77.5454024
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 58,
            doctors: 16
        },
        capabilities: [
            "trauma",
            "other",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-563",
        name: "Focus Diagnostic Center",
        location: {
            latitude: 12.9870634,
            longitude: 77.549951
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 86,
            doctors: 31
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-564",
        name: "Vittal Eye HOspital",
        location: {
            latitude: 12.931298,
            longitude: 77.5412566
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 92,
            doctors: 32
        },
        capabilities: [
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-565",
        name: "naveen clinc",
        location: {
            latitude: 13.0413777,
            longitude: 77.5050224
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 48,
            doctors: 29
        },
        capabilities: [
            "cardiac",
            "trauma",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-566",
        name: "Chamundi Hi Tech Hospital",
        location: {
            latitude: 12.9240924,
            longitude: 77.6177848
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 96,
            doctors: 16
        },
        capabilities: [
            "cardiac",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-567",
        name: "Little Flower Hospital",
        location: {
            latitude: 12.9807257,
            longitude: 77.6823734
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 62,
            doctors: 15
        },
        capabilities: [
            "respiratory",
            "trauma",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-568",
        name: "NMPC Hospital",
        location: {
            latitude: 13.006205,
            longitude: 77.7004289
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 111,
            doctors: 17
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-569",
        name: "R R Hospital",
        location: {
            latitude: 13.0082031,
            longitude: 77.697197
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 23,
            doctors: 14
        },
        capabilities: [
            "other",
            "stroke",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-570",
        name: "Jeevan Hospital",
        location: {
            latitude: 12.9901305,
            longitude: 77.6713322
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 32,
            doctors: 23
        },
        capabilities: [
            "poisoning",
            "other",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-571",
        name: "Vicky Family Life",
        location: {
            latitude: 13.0031618,
            longitude: 77.7059531
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 26,
            doctors: 29
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-572",
        name: "Vedam Ayurveda Multi Speciality Hospital",
        location: {
            latitude: 12.9946786,
            longitude: 77.6709989
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 108,
            doctors: 32
        },
        capabilities: [
            "poisoning",
            "burn",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-573",
        name: "Stroke Treatment Paralysis",
        location: {
            latitude: 13.0239995,
            longitude: 77.6585299
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 29,
            doctors: 24
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-574",
        name: "Geriatric Hospitals",
        location: {
            latitude: 13.0283977,
            longitude: 77.6599575
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 52,
            doctors: 32
        },
        capabilities: [
            "trauma",
            "other",
            "burn",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-575",
        name: "Health Plus Multi Speciality Hospital",
        location: {
            latitude: 13.0219523,
            longitude: 77.6994046
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 46,
            doctors: 20
        },
        capabilities: [
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-576",
        name: "Pragathi Piles Hospital",
        location: {
            latitude: 12.9966313,
            longitude: 77.671863
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 116,
            doctors: 13
        },
        capabilities: [
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-577",
        name: "Mahaveer Hospitals",
        location: {
            latitude: 12.9895049,
            longitude: 77.6741439
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 66,
            doctors: 39
        },
        capabilities: [
            "cardiac",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-578",
        name: "Eshawar HospItal",
        location: {
            latitude: 13.033219,
            longitude: 77.6747693
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 45,
            doctors: 10
        },
        capabilities: [
            "respiratory",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-579",
        name: "Medihope Super Specialty Hospital",
        location: {
            latitude: 12.973637,
            longitude: 77.675186
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 27,
            doctors: 12
        },
        capabilities: [
            "other",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-580",
        name: "Cure N Care Hospital",
        location: {
            latitude: 12.989869,
            longitude: 77.676589
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 27,
            doctors: 32
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-581",
        name: "Sad Bydya Shala Ayurvedic Hospital",
        location: {
            latitude: 13.0106539,
            longitude: 77.6969464
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 34,
            doctors: 10
        },
        capabilities: [
            "stroke",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-582",
        name: "Sri Lakshmi Super Speciality Hospital",
        location: {
            latitude: 13.011115,
            longitude: 77.697361
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 39,
            doctors: 20
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-583",
        name: "Kids Health Link",
        location: {
            latitude: 13.0031938,
            longitude: 77.7128759
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 62,
            doctors: 21
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-584",
        name: "Prakruti Hospital",
        location: {
            latitude: 12.991561,
            longitude: 77.6757833
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 32,
            doctors: 22
        },
        capabilities: [
            "cardiac",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-585",
        name: "Amrutha Healthcare",
        location: {
            latitude: 13.0042616,
            longitude: 77.7114153
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 42,
            doctors: 23
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-586",
        name: "Kamadhenu Hospital",
        location: {
            latitude: 12.975501,
            longitude: 77.534972
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 116,
            doctors: 35
        },
        capabilities: [
            "stroke",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-587",
        name: "Dr. Rajesh Hospitals Eye and Dental",
        location: {
            latitude: 12.9688989,
            longitude: 77.6422131
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 105,
            doctors: 11
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-588",
        name: "OJUS Multi Speciality Hospital",
        location: {
            latitude: 12.957269,
            longitude: 77.653945
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 92,
            doctors: 34
        },
        capabilities: [
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-589",
        name: "Benaka Hospital",
        location: {
            latitude: 12.9835824,
            longitude: 77.5289448
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 104,
            doctors: 34
        },
        capabilities: [
            "burn",
            "cardiac",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-590",
        name: "Goverment Hospital, Hosahalli",
        location: {
            latitude: 12.9744928,
            longitude: 77.5342045
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 118,
            doctors: 17
        },
        capabilities: [
            "stroke",
            "burn",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-591",
        name: "Jhon's Medical Hospital",
        location: {
            latitude: 12.9635299,
            longitude: 77.6662889
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 33,
            doctors: 24
        },
        capabilities: [
            "trauma",
            "burn",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-592",
        name: "Vijaya Hospital",
        location: {
            latitude: 12.96767,
            longitude: 77.5226459
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 106,
            doctors: 21
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-593",
        name: "Government Hospital",
        location: {
            latitude: 12.9780731,
            longitude: 77.5251934
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 117,
            doctors: 39
        },
        capabilities: [
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-594",
        name: "Sriprasad Ayurveda",
        location: {
            latitude: 12.9734087,
            longitude: 77.5462808
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 38,
            doctors: 38
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-595",
        name: "Vidya Eye Hospital",
        location: {
            latitude: 12.9707429,
            longitude: 77.5377684
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 44,
            doctors: 16
        },
        capabilities: [
            "other",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-596",
        name: "Sai Baba Hospital",
        location: {
            latitude: 12.9698194,
            longitude: 77.6317472
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 55,
            doctors: 16
        },
        capabilities: [
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-597",
        name: "Shree Sai Speciality Hospital",
        location: {
            latitude: 12.9555948,
            longitude: 77.6418006
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 55,
            doctors: 33
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-598",
        name: "Shree Dhanvantari Ayurveda Hospital",
        location: {
            latitude: 12.9615606,
            longitude: 77.5222312
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 52,
            doctors: 14
        },
        capabilities: [
            "burn",
            "other",
            "trauma",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-599",
        name: "Srinivasam Cancer Care Multi Speciality Hospital",
        location: {
            latitude: 12.961509,
            longitude: 77.523151
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 108,
            doctors: 22
        },
        capabilities: [
            "burn",
            "cardiac",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-600",
        name: "Magdum Hospital",
        location: {
            latitude: 12.9589495,
            longitude: 77.6603768
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 89,
            doctors: 33
        },
        capabilities: [
            "cardiac",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-601",
        name: "Athoz Hospitals",
        location: {
            latitude: 12.9673428,
            longitude: 77.6424996
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 101,
            doctors: 28
        },
        capabilities: [
            "trauma",
            "cardiac",
            "respiratory",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-602",
        name: "G.R. Hospital",
        location: {
            latitude: 12.9802303,
            longitude: 77.5548818
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 52,
            doctors: 15
        },
        capabilities: [
            "cardiac",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-603",
        name: "Sneha Horizon Hospital",
        location: {
            latitude: 12.9754301,
            longitude: 77.5358001
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 104,
            doctors: 33
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-604",
        name: "Jagjeevanram Hospital",
        location: {
            latitude: 12.968292,
            longitude: 77.524492
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 64,
            doctors: 20
        },
        capabilities: [
            "cardiac",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-605",
        name: "Kangroo Hospital",
        location: {
            latitude: 12.974339,
            longitude: 77.542325
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 73,
            doctors: 22
        },
        capabilities: [
            "other",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-606",
        name: "Abhinav Hospital",
        location: {
            latitude: 12.9757486,
            longitude: 77.553782
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 103,
            doctors: 21
        },
        capabilities: [
            "stroke",
            "other",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-607",
        name: "Suhusannidhi Hospital",
        location: {
            latitude: 12.969102,
            longitude: 77.534951
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 67,
            doctors: 16
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-608",
        name: "Abivrud Cancer Care & Research Centre",
        location: {
            latitude: 12.963967,
            longitude: 77.4973049
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 111,
            doctors: 25
        },
        capabilities: [
            "trauma",
            "burn",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-609",
        name: "Panchsheela Nagar Hospital",
        location: {
            latitude: 12.9745497,
            longitude: 77.5208943
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 79,
            doctors: 34
        },
        capabilities: [
            "stroke",
            "poisoning",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-610",
        name: "ESIC Hospital",
        location: {
            latitude: 12.9693009,
            longitude: 77.6317545
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 86,
            doctors: 32
        },
        capabilities: [
            "other",
            "stroke",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-611",
        name: "Sai Ortho and Dental Centre",
        location: {
            latitude: 12.9698191,
            longitude: 77.5360801
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 43,
            doctors: 38
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-612",
        name: "Ammashrees Hospital",
        location: {
            latitude: 12.9794315,
            longitude: 77.5441641
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 91,
            doctors: 12
        },
        capabilities: [
            "poisoning",
            "burn",
            "cardiac",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-613",
        name: "Lohitha Hospital",
        location: {
            latitude: 12.963951,
            longitude: 77.64308
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 29,
            doctors: 27
        },
        capabilities: [
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-614",
        name: "Government Hospital",
        location: {
            latitude: 12.9639829,
            longitude: 77.5188899
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 108,
            doctors: 25
        },
        capabilities: [
            "respiratory",
            "burn",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-615",
        name: "Revathi Hospital",
        location: {
            latitude: 12.9679971,
            longitude: 77.5015759
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 43,
            doctors: 14
        },
        capabilities: [
            "cardiac",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-616",
        name: "Shanthakumari Hospital",
        location: {
            latitude: 12.9637162,
            longitude: 77.5188263
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 82,
            doctors: 19
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-617",
        name: "Bengaluru Child Neurology and Rehabilitaion Centre",
        location: {
            latitude: 12.9735574,
            longitude: 77.5461246
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 22,
            doctors: 26
        },
        capabilities: [
            "respiratory",
            "trauma",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-618",
        name: "Sumati Hospital",
        location: {
            latitude: 12.976379,
            longitude: 77.524439
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 103,
            doctors: 14
        },
        capabilities: [
            "burn",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-619",
        name: "Dr. Hemant Agrawal",
        location: {
            latitude: 12.9583212,
            longitude: 77.659636
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 87,
            doctors: 27
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-620",
        name: "Dr. Nothesh Child Specialist",
        location: {
            latitude: 12.975423,
            longitude: 77.540659
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 91,
            doctors: 32
        },
        capabilities: [
            "other",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-621",
        name: "Swasthya Hospitals",
        location: {
            latitude: 12.9544981,
            longitude: 77.6401572
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 25,
            doctors: 29
        },
        capabilities: [
            "respiratory",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-622",
        name: "Miracle Hopital",
        location: {
            latitude: 12.958861,
            longitude: 77.654322
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 111,
            doctors: 35
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-623",
        name: "Sastry Memorial Hospital",
        location: {
            latitude: 12.9698787,
            longitude: 77.5332834
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 62,
            doctors: 27
        },
        capabilities: [
            "cardiac",
            "stroke",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-624",
        name: "Springleaf Hospital",
        location: {
            latitude: 12.852699,
            longitude: 77.667688
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 26,
            doctors: 34
        },
        capabilities: [
            "poisoning",
            "trauma",
            "cardiac",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-625",
        name: "Hospitec Multispeciality Hospital",
        location: {
            latitude: 12.8859649,
            longitude: 77.6489078
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 86,
            doctors: 19
        },
        capabilities: [
            "cardiac",
            "stroke",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-626",
        name: "Sri Venkateswara Hospital",
        location: {
            latitude: 12.9056165,
            longitude: 77.6122688
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 36,
            doctors: 30
        },
        capabilities: [
            "poisoning",
            "respiratory",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-627",
        name: "Rajashri Grandhim Hospitals",
        location: {
            latitude: 12.895426,
            longitude: 77.607662
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 85,
            doctors: 18
        },
        capabilities: [
            "other",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-628",
        name: "Goldage Hospital",
        location: {
            latitude: 12.8908362,
            longitude: 77.6040715
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 106,
            doctors: 31
        },
        capabilities: [
            "stroke",
            "cardiac",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-629",
        name: "JJ Hospitals",
        location: {
            latitude: 12.8350141,
            longitude: 77.6953077
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 90,
            doctors: 29
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-630",
        name: "Best E City Hospital",
        location: {
            latitude: 12.850377,
            longitude: 77.6567056
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 65,
            doctors: 27
        },
        capabilities: [
            "other",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-631",
        name: "Vinayaka Hospital",
        location: {
            latitude: 12.93753,
            longitude: 77.549675
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 96,
            doctors: 32
        },
        capabilities: [
            "other",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-632",
        name: "Unani Hospital",
        location: {
            latitude: 12.9633185,
            longitude: 77.5790145
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 37,
            doctors: 10
        },
        capabilities: [
            "burn",
            "respiratory",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-633",
        name: "Rahul Maternity & Child Health Centre",
        location: {
            latitude: 12.9596227,
            longitude: 77.6146819
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 79,
            doctors: 24
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-634",
        name: "Bangaluru Unani Hospital",
        location: {
            latitude: 12.9405198,
            longitude: 77.5794387
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 95,
            doctors: 17
        },
        capabilities: [
            "poisoning",
            "cardiac",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-635",
        name: "Medcare Hospital",
        location: {
            latitude: 12.953049,
            longitude: 77.574203
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 109,
            doctors: 27
        },
        capabilities: [
            "respiratory",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-636",
        name: "Sumanjara Hospital",
        location: {
            latitude: 12.9417439,
            longitude: 77.5601782
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 86,
            doctors: 15
        },
        capabilities: [
            "other",
            "stroke",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-637",
        name: "Corporation Hospital",
        location: {
            latitude: 12.961345,
            longitude: 77.560893
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 70,
            doctors: 23
        },
        capabilities: [
            "cardiac",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-638",
        name: "Mitralaya Hospital",
        location: {
            latitude: 12.945591,
            longitude: 77.5712865
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 108,
            doctors: 16
        },
        capabilities: [
            "stroke",
            "trauma",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-639",
        name: "People Tree Hospitals",
        location: {
            latitude: 12.942076,
            longitude: 77.553598
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 34,
            doctors: 24
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-640",
        name: "Apollo Specialty Hospital",
        location: {
            latitude: 12.936459,
            longitude: 77.584422
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 100,
            doctors: 18
        },
        capabilities: [
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-641",
        name: "Government Hospital",
        location: {
            latitude: 12.9609494,
            longitude: 77.5613939
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 78,
            doctors: 27
        },
        capabilities: [
            "stroke",
            "cardiac",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-642",
        name: "Verna Hospital",
        location: {
            latitude: 12.940404,
            longitude: 77.5580361
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 89,
            doctors: 34
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-643",
        name: "Government Hospital, Banglore",
        location: {
            latitude: 12.9587464,
            longitude: 77.5573456
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 106,
            doctors: 22
        },
        capabilities: [
            "stroke",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-644",
        name: "Royan Maternity & Child Welfare Centre",
        location: {
            latitude: 12.960311,
            longitude: 77.568274
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 27,
            doctors: 18
        },
        capabilities: [
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-645",
        name: "Alisa Eye Hospital",
        location: {
            latitude: 12.9652304,
            longitude: 77.6104334
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 30,
            doctors: 19
        },
        capabilities: [
            "trauma",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-646",
        name: "Shekhar Hospital",
        location: {
            latitude: 12.945944,
            longitude: 77.567404
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 79,
            doctors: 30
        },
        capabilities: [
            "stroke",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-647",
        name: "Government Hospital",
        location: {
            latitude: 12.949104,
            longitude: 77.563226
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 89,
            doctors: 15
        },
        capabilities: [
            "respiratory",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-648",
        name: "Jeevini Sarvodaya Hospital",
        location: {
            latitude: 12.9415883,
            longitude: 77.5641917
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 89,
            doctors: 20
        },
        capabilities: [
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-649",
        name: "Mahaveer Ortho Care Speciality Centre",
        location: {
            latitude: 12.9569684,
            longitude: 77.5695045
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 104,
            doctors: 22
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-650",
        name: "Raghavendra Hospital",
        location: {
            latitude: 12.938787,
            longitude: 77.554296
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 63,
            doctors: 17
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-651",
        name: "Apaara Multi Speciality",
        location: {
            latitude: 12.938453,
            longitude: 77.551329
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 54,
            doctors: 29
        },
        capabilities: [
            "cardiac",
            "burn",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-652",
        name: "Khincha Orthopaedic Centre",
        location: {
            latitude: 12.939882,
            longitude: 77.573989
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 112,
            doctors: 28
        },
        capabilities: [
            "burn",
            "poisoning",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-653",
        name: "Parameshwari Hospital",
        location: {
            latitude: 12.948971,
            longitude: 77.563543
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 66,
            doctors: 13
        },
        capabilities: [
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-654",
        name: "Drishti Nethralaya",
        location: {
            latitude: 12.9422541,
            longitude: 77.5506328
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 25,
            doctors: 27
        },
        capabilities: [
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-655",
        name: "Furtde Hospital",
        location: {
            latitude: 12.9654649,
            longitude: 77.5894756
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 118,
            doctors: 28
        },
        capabilities: [
            "poisoning",
            "respiratory",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-656",
        name: "Manavarthapet Pregnancy Hospital",
        location: {
            latitude: 12.9702549,
            longitude: 77.5734571
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 26,
            doctors: 17
        },
        capabilities: [
            "poisoning",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-657",
        name: "Trinity Hospital and Heart Foundation",
        location: {
            latitude: 12.9434996,
            longitude: 77.5796583
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 109,
            doctors: 17
        },
        capabilities: [
            "other",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-658",
        name: "Spandana Heart Centre",
        location: {
            latitude: 12.957222,
            longitude: 77.566486
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 64,
            doctors: 26
        },
        capabilities: [
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-659",
        name: "Shas Eye Care",
        location: {
            latitude: 12.960296,
            longitude: 77.614714
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 22,
            doctors: 37
        },
        capabilities: [
            "other",
            "trauma",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-660",
        name: "Matha Pitha Hospital",
        location: {
            latitude: 12.9420276,
            longitude: 77.575634
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 114,
            doctors: 26
        },
        capabilities: [
            "trauma",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-661",
        name: "ESI Hospital",
        location: {
            latitude: 12.972126,
            longitude: 77.573351
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 87,
            doctors: 25
        },
        capabilities: [
            "trauma",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-662",
        name: "Herige Hospital",
        location: {
            latitude: 12.960972,
            longitude: 77.5609696
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 95,
            doctors: 17
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-663",
        name: "Gleneagles Global Hospitals",
        location: {
            latitude: 12.9654497,
            longitude: 77.5999044
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 52,
            doctors: 36
        },
        capabilities: [
            "burn",
            "poisoning",
            "stroke",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-664",
        name: "Punarjyoti Eye Hospital",
        location: {
            latitude: 12.9658901,
            longitude: 77.589928
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 63,
            doctors: 39
        },
        capabilities: [
            "poisoning",
            "cardiac",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-665",
        name: "Swastik Eye Hospital",
        location: {
            latitude: 12.9479647,
            longitude: 77.5696395
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 62,
            doctors: 18
        },
        capabilities: [
            "stroke",
            "cardiac",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-666",
        name: "Dave Gray Hospital",
        location: {
            latitude: 12.9458294,
            longitude: 77.5799015
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 93,
            doctors: 28
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-667",
        name: "Dr. Rudrappa's Hospital",
        location: {
            latitude: 12.9650303,
            longitude: 77.5954946
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 35,
            doctors: 14
        },
        capabilities: [
            "burn",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-668",
        name: "Aveksha Hospital",
        location: {
            latitude: 13.081777,
            longitude: 77.54091
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 62,
            doctors: 12
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-669",
        name: "Shishuka Children's Speciality Hospital",
        location: {
            latitude: 13.0193799,
            longitude: 77.6535352
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 21,
            doctors: 26
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-670",
        name: "Skin Remediez",
        location: {
            latitude: 13.0091103,
            longitude: 77.6579493
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 26,
            doctors: 28
        },
        capabilities: [
            "poisoning",
            "other",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-671",
        name: "Navya Hospital",
        location: {
            latitude: 13.0524836,
            longitude: 77.6120857
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 26,
            doctors: 28
        },
        capabilities: [
            "respiratory",
            "stroke",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-672",
        name: "Ovum Birthing Centre",
        location: {
            latitude: 13.0201491,
            longitude: 77.6516628
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 64,
            doctors: 31
        },
        capabilities: [
            "respiratory",
            "burn",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-673",
        name: "Icon Hospital",
        location: {
            latitude: 13.0528211,
            longitude: 77.6041042
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 85,
            doctors: 35
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-674",
        name: "Medicure Hospital",
        location: {
            latitude: 13.0283463,
            longitude: 77.6298629
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 86,
            doctors: 13
        },
        capabilities: [
            "respiratory",
            "trauma",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-675",
        name: "Motherhood Women & Children Hospital",
        location: {
            latitude: 13.0102697,
            longitude: 77.6525909
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 63,
            doctors: 28
        },
        capabilities: [
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-676",
        name: "Santhamma Hospital",
        location: {
            latitude: 13.0866852,
            longitude: 77.5535728
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 96,
            doctors: 31
        },
        capabilities: [
            "respiratory",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-677",
        name: "Feran Hospital",
        location: {
            latitude: 13.0263661,
            longitude: 77.6302142
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 43,
            doctors: 36
        },
        capabilities: [
            "burn",
            "cardiac",
            "poisoning",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-678",
        name: "Super Specialty Eye Hospital",
        location: {
            latitude: 13.0166883,
            longitude: 77.6604049
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 80,
            doctors: 15
        },
        capabilities: [
            "poisoning",
            "respiratory",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-679",
        name: "Endocrine Speciality Centre",
        location: {
            latitude: 13.013761,
            longitude: 77.648529
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 55,
            doctors: 14
        },
        capabilities: [
            "respiratory",
            "stroke",
            "other",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-680",
        name: "Shree Sai Hospital",
        location: {
            latitude: 13.0885791,
            longitude: 77.5455057
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 47,
            doctors: 14
        },
        capabilities: [
            "respiratory",
            "burn",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-681",
        name: "Axis Hospital",
        location: {
            latitude: 13.065863,
            longitude: 77.604213
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 67,
            doctors: 20
        },
        capabilities: [
            "trauma",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-682",
        name: "Anjani Women's Day Care Hospital",
        location: {
            latitude: 13.0188119,
            longitude: 77.647187
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 29,
            doctors: 19
        },
        capabilities: [
            "cardiac",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-683",
        name: "Eswar Women and Day Care Hospital",
        location: {
            latitude: 13.0658472,
            longitude: 77.5992844
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 77,
            doctors: 24
        },
        capabilities: [
            "poisoning",
            "stroke",
            "cardiac",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-684",
        name: "CDEC Hospital",
        location: {
            latitude: 13.026989,
            longitude: 77.6281742
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 104,
            doctors: 32
        },
        capabilities: [
            "stroke",
            "trauma",
            "other",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-685",
        name: "Pranam Dental Hospital",
        location: {
            latitude: 13.029101,
            longitude: 77.620568
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 82,
            doctors: 39
        },
        capabilities: [
            "respiratory",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-686",
        name: "Milaan Hospital",
        location: {
            latitude: 13.0109537,
            longitude: 77.6476418
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 42,
            doctors: 34
        },
        capabilities: [
            "poisoning",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-687",
        name: "Cloudnine Hospital",
        location: {
            latitude: 13.020084,
            longitude: 77.654053
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 119,
            doctors: 36
        },
        capabilities: [
            "stroke",
            "cardiac",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-688",
        name: "NDR Multi Speciality Hospital",
        location: {
            latitude: 13.1051735,
            longitude: 77.6027864
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 81,
            doctors: 27
        },
        capabilities: [
            "other",
            "cardiac",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-689",
        name: "Valens Hospitals",
        location: {
            latitude: 13.120977,
            longitude: 77.6176084
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 75,
            doctors: 20
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-690",
        name: "Bengalure Hospital",
        location: {
            latitude: 13.1039081,
            longitude: 77.5754898
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 102,
            doctors: 24
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-691",
        name: "Amruth Hospital",
        location: {
            latitude: 13.102578,
            longitude: 77.627895
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 51,
            doctors: 19
        },
        capabilities: [
            "cardiac",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-692",
        name: "Rangalakshmi Netralaya",
        location: {
            latitude: 13.098943,
            longitude: 77.576716
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 21,
            doctors: 37
        },
        capabilities: [
            "other",
            "poisoning",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-693",
        name: "Saralaya Hospital",
        location: {
            latitude: 13.121743,
            longitude: 77.629478
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 40,
            doctors: 30
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-694",
        name: "Apurva Hospital",
        location: {
            latitude: 13.101335,
            longitude: 77.59858
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 74,
            doctors: 23
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-695",
        name: "Om Shakthi Hospital",
        location: {
            latitude: 13.1215701,
            longitude: 77.6126077
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 29,
            doctors: 28
        },
        capabilities: [
            "poisoning",
            "cardiac",
            "burn",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-696",
        name: "Shadab Hospital",
        location: {
            latitude: 13.1025229,
            longitude: 77.6278506
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 46,
            doctors: 16
        },
        capabilities: [
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-697",
        name: "Rainbow Health Care",
        location: {
            latitude: 13.0997321,
            longitude: 77.5760891
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 58,
            doctors: 10
        },
        capabilities: [
            "respiratory",
            "poisoning",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-698",
        name: "Jayalakshmi Hospital",
        location: {
            latitude: 13.098909,
            longitude: 77.596219
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 111,
            doctors: 19
        },
        capabilities: [
            "cardiac",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-699",
        name: "NDR Orthopaedic",
        location: {
            latitude: 13.10051,
            longitude: 77.595603
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 35,
            doctors: 25
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-700",
        name: "Sri Arogya Hospital",
        location: {
            latitude: 13.1215659,
            longitude: 77.6250507
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 39,
            doctors: 39
        },
        capabilities: [
            "other",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-701",
        name: "Sapthagiri Hospital",
        location: {
            latitude: 13.1213668,
            longitude: 77.6174817
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 40,
            doctors: 10
        },
        capabilities: [
            "burn",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-702",
        name: "Pavan Hospitals",
        location: {
            latitude: 13.0981485,
            longitude: 77.596139
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 79,
            doctors: 19
        },
        capabilities: [
            "burn",
            "trauma",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-703",
        name: "Kushi Hospital",
        location: {
            latitude: 13.0938081,
            longitude: 77.5804166
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 29,
            doctors: 15
        },
        capabilities: [
            "burn",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-704",
        name: "Vikrant Hospital",
        location: {
            latitude: 13.142831,
            longitude: 77.6727356
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 61,
            doctors: 14
        },
        capabilities: [
            "poisoning",
            "cardiac",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-705",
        name: "Varsha Hospital",
        location: {
            latitude: 13.1026581,
            longitude: 77.6297932
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 111,
            doctors: 19
        },
        capabilities: [
            "poisoning",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-706",
        name: "Just Smiles",
        location: {
            latitude: 13.098668,
            longitude: 77.5826843
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 30,
            doctors: 17
        },
        capabilities: [
            "trauma",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-707",
        name: "Lavis Hospital",
        location: {
            latitude: 12.925461,
            longitude: 77.609021
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 66,
            doctors: 32
        },
        capabilities: [
            "trauma",
            "poisoning",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-708",
        name: "Sevakshetra Hospital",
        location: {
            latitude: 12.9215119,
            longitude: 77.5724702
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 47,
            doctors: 25
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-709",
        name: "Perfetual Help Hospital",
        location: {
            latitude: 12.9055752,
            longitude: 77.5425258
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 64,
            doctors: 34
        },
        capabilities: [
            "trauma",
            "other",
            "poisoning",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-710",
        name: "Shree Vaishnavi Heart Centre and Multi Speciality",
        location: {
            latitude: 12.9121632,
            longitude: 77.6098276
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 111,
            doctors: 23
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-711",
        name: "Marigold Hospital",
        location: {
            latitude: 12.9136262,
            longitude: 77.6045369
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 95,
            doctors: 17
        },
        capabilities: [
            "stroke",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-712",
        name: "Bharathi Hospitals",
        location: {
            latitude: 12.9334096,
            longitude: 77.5622345
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 70,
            doctors: 36
        },
        capabilities: [
            "trauma",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-713",
        name: "Devi Hospital",
        location: {
            latitude: 12.9239445,
            longitude: 77.6198634
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 39,
            doctors: 30
        },
        capabilities: [
            "burn",
            "respiratory",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-714",
        name: "Devagiri Hospital",
        location: {
            latitude: 12.924153,
            longitude: 77.565797
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 52,
            doctors: 25
        },
        capabilities: [
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-715",
        name: "Pothys Hospital",
        location: {
            latitude: 12.9159348,
            longitude: 77.6034098
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 58,
            doctors: 19
        },
        capabilities: [
            "other",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-716",
        name: "Center for Liver Disease Hospital",
        location: {
            latitude: 12.916234,
            longitude: 77.593019
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 80,
            doctors: 39
        },
        capabilities: [
            "stroke",
            "burn",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-717",
        name: "Sudha Prevention Centre",
        location: {
            latitude: 12.9254569,
            longitude: 77.5467101
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 107,
            doctors: 31
        },
        capabilities: [
            "burn",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-718",
        name: "Sahasra Hospital",
        location: {
            latitude: 12.920651,
            longitude: 77.5746118
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 73,
            doctors: 24
        },
        capabilities: [
            "trauma",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-719",
        name: "Health India Hospital",
        location: {
            latitude: 12.9265183,
            longitude: 77.6090995
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 103,
            doctors: 32
        },
        capabilities: [
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-720",
        name: "Shanti Hospital",
        location: {
            latitude: 12.9202202,
            longitude: 77.5772991
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 22,
            doctors: 10
        },
        capabilities: [
            "stroke",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-721",
        name: "Spurthy Hospital",
        location: {
            latitude: 12.923857,
            longitude: 77.611355
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 32,
            doctors: 14
        },
        capabilities: [
            "respiratory",
            "burn",
            "cardiac",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-722",
        name: "Apollo Cradle Maternity & Children's Hospital",
        location: {
            latitude: 12.916885,
            longitude: 77.585258
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 53,
            doctors: 20
        },
        capabilities: [
            "burn",
            "cardiac",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-723",
        name: "St. Martha's Hospital",
        location: {
            latitude: 12.906113,
            longitude: 77.542548
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 92,
            doctors: 39
        },
        capabilities: [
            "trauma",
            "cardiac",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-724",
        name: "Chinmaya Hrudayalaya",
        location: {
            latitude: 12.9778121,
            longitude: 77.6459447
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 87,
            doctors: 30
        },
        capabilities: [
            "trauma",
            "cardiac",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-725",
        name: "Sri Lakshmi Multi Speciality Hospital",
        location: {
            latitude: 12.8812376,
            longitude: 77.7516894
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 118,
            doctors: 33
        },
        capabilities: [
            "stroke",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-726",
        name: "Government Hospital",
        location: {
            latitude: 13.0903942,
            longitude: 77.4966765
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 46,
            doctors: 31
        },
        capabilities: [
            "trauma",
            "burn",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-727",
        name: "Government Hospital",
        location: {
            latitude: 13.0803204,
            longitude: 77.5535057
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 71,
            doctors: 13
        },
        capabilities: [
            "poisoning",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-728",
        name: "Bangalore Healthcare Center Pranav Ayurveda Hospital",
        location: {
            latitude: 13.0770012,
            longitude: 77.5581038
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 66,
            doctors: 19
        },
        capabilities: [
            "trauma",
            "burn",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-729",
        name: "Government Hospital",
        location: {
            latitude: 13.070554,
            longitude: 77.5388968
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 22,
            doctors: 20
        },
        capabilities: [
            "poisoning",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-730",
        name: "Kruthika Hospital",
        location: {
            latitude: 13.0650144,
            longitude: 77.5041964
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 117,
            doctors: 30
        },
        capabilities: [
            "burn",
            "other",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-731",
        name: "Dr Saju George Kottakkal",
        location: {
            latitude: 13.0621628,
            longitude: 77.5177637
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 92,
            doctors: 20
        },
        capabilities: [
            "burn",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-732",
        name: "Fathima Hospital",
        location: {
            latitude: 13.0559513,
            longitude: 77.5329456
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 102,
            doctors: 17
        },
        capabilities: [
            "poisoning",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-733",
        name: "Esi Dispensary",
        location: {
            latitude: 13.0439933,
            longitude: 77.5065494
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 65,
            doctors: 26
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-734",
        name: "Ashwini Hospital",
        location: {
            latitude: 13.0313399,
            longitude: 77.5055985
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 48,
            doctors: 15
        },
        capabilities: [
            "respiratory",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-735",
        name: "Esi Hospital Peenya 1st Stage",
        location: {
            latitude: 13.0280728,
            longitude: 77.5231858
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 85,
            doctors: 32
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-736",
        name: "Nayanalaya Super Speciality Eye Care Centre",
        location: {
            latitude: 13.006795,
            longitude: 77.571159
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 30,
            doctors: 34
        },
        capabilities: [
            "cardiac",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-737",
        name: "Srinidhi Health Centre",
        location: {
            latitude: 13.005821,
            longitude: 77.5725746
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 112,
            doctors: 10
        },
        capabilities: [
            "cardiac",
            "trauma",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-738",
        name: "Orthopedic & Eye Care Center",
        location: {
            latitude: 13.0054934,
            longitude: 77.5719519
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 79,
            doctors: 16
        },
        capabilities: [
            "stroke",
            "other",
            "poisoning",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-739",
        name: "ESI Hospital",
        location: {
            latitude: 13.004596,
            longitude: 77.5540033
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 92,
            doctors: 12
        },
        capabilities: [
            "burn",
            "other",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-740",
        name: "Ramani Orthopaedic Hospital",
        location: {
            latitude: 13.0044307,
            longitude: 77.5785238
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 51,
            doctors: 11
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-741",
        name: "Atharva Ayurdhama Ayurvedic Hospital",
        location: {
            latitude: 13.004314,
            longitude: 77.547749
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 37,
            doctors: 18
        },
        capabilities: [
            "burn",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-742",
        name: "RICH CARE HOMEOPATHY",
        location: {
            latitude: 13.0015461,
            longitude: 77.5721683
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 82,
            doctors: 23
        },
        capabilities: [
            "poisoning",
            "trauma",
            "other",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-743",
        name: "Poornayu Ayurveda Hospital",
        location: {
            latitude: 12.998238,
            longitude: 77.551173
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 117,
            doctors: 24
        },
        capabilities: [
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-744",
        name: "Appllo Diagnostic",
        location: {
            latitude: 12.9981064,
            longitude: 77.6008126
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 21,
            doctors: 18
        },
        capabilities: [
            "stroke",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-745",
        name: "Supra Diagnostics Spine Care And Ortho Care Hospital",
        location: {
            latitude: 12.9969996,
            longitude: 77.5730038
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 22,
            doctors: 19
        },
        capabilities: [
            "burn",
            "cardiac",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-746",
        name: "K.C.General Hospital",
        location: {
            latitude: 12.9960244,
            longitude: 77.5693714
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 70,
            doctors: 28
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-747",
        name: "ESIC Model Hospital",
        location: {
            latitude: 12.9916924,
            longitude: 77.5539007
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 36,
            doctors: 17
        },
        capabilities: [
            "trauma",
            "cardiac",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-748",
        name: "Government Hospital",
        location: {
            latitude: 12.9905045,
            longitude: 77.5566355
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 88,
            doctors: 32
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-749",
        name: "Esi Hospital Bangalore",
        location: {
            latitude: 12.9904985,
            longitude: 77.5530924
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 78,
            doctors: 35
        },
        capabilities: [
            "burn",
            "respiratory",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-750",
        name: "Government Hospital",
        location: {
            latitude: 12.9844963,
            longitude: 77.5551801
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 37,
            doctors: 33
        },
        capabilities: [
            "respiratory",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-751",
        name: "Anupama Hospital",
        location: {
            latitude: 12.9831814,
            longitude: 77.4787872
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 67,
            doctors: 38
        },
        capabilities: [
            "burn",
            "other",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-752",
        name: "Sun Orthopaedic center",
        location: {
            latitude: 13.0332219,
            longitude: 77.5549236
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 103,
            doctors: 29
        },
        capabilities: [
            "poisoning",
            "trauma",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-753",
        name: "St. Johns hospital Emergency ward",
        location: {
            latitude: 12.9305937,
            longitude: 77.6186159
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 79,
            doctors: 27
        },
        capabilities: [
            "other",
            "poisoning",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-754",
        name: "Adarsh Hospital",
        location: {
            latitude: 12.9208444,
            longitude: 77.4847891
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 47,
            doctors: 12
        },
        capabilities: [
            "poisoning",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-755",
        name: "Shree Manyata Hospitals",
        location: {
            latitude: 13.0544507,
            longitude: 77.6316369
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 62,
            doctors: 20
        },
        capabilities: [
            "poisoning",
            "respiratory",
            "stroke",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-756",
        name: "Kidwai Cancer Institute Radiation Block",
        location: {
            latitude: 12.9355966,
            longitude: 77.5971575
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 116,
            doctors: 21
        },
        capabilities: [
            "respiratory",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-757",
        name: "Altius Hospital",
        location: {
            latitude: 13.0344639,
            longitude: 77.6291947
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 51,
            doctors: 35
        },
        capabilities: [
            "trauma",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-758",
        name: "Neo Hospital",
        location: {
            latitude: 12.8474,
            longitude: 77.6439378
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 95,
            doctors: 28
        },
        capabilities: [
            "trauma",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-759",
        name: "Maya Hospital",
        location: {
            latitude: 12.9365283,
            longitude: 77.7046741
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 31,
            doctors: 17
        },
        capabilities: [
            "burn",
            "trauma",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-760",
        name: "Devi Eye Hospital",
        location: {
            latitude: 12.9556074,
            longitude: 77.7216631
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 76,
            doctors: 16
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-761",
        name: "Sahasra Hospital",
        location: {
            latitude: 12.9337751,
            longitude: 77.7433234
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 70,
            doctors: 25
        },
        capabilities: [
            "poisoning",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-762",
        name: "Cloudnine Hospital",
        location: {
            latitude: 12.8832909,
            longitude: 77.5500857
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 77,
            doctors: 10
        },
        capabilities: [
            "cardiac",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-763",
        name: "My Dentist",
        location: {
            latitude: 12.9429852,
            longitude: 77.5460604
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 61,
            doctors: 34
        },
        capabilities: [
            "trauma",
            "cardiac",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-764",
        name: "Siddanth Hospital",
        location: {
            latitude: 12.9563317,
            longitude: 77.7305782
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 103,
            doctors: 31
        },
        capabilities: [
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-765",
        name: "Apollo Pharmacy",
        location: {
            latitude: 12.9263862,
            longitude: 77.6766068
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 41,
            doctors: 20
        },
        capabilities: [
            "burn",
            "trauma",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-766",
        name: "Suraksha Hospital",
        location: {
            latitude: 13.048083,
            longitude: 77.628791
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 39,
            doctors: 11
        },
        capabilities: [
            "cardiac",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-767",
        name: "The Local Dentist",
        location: {
            latitude: 12.9094156,
            longitude: 77.663997
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 48,
            doctors: 38
        },
        capabilities: [
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-768",
        name: "Lotus Hospital",
        location: {
            latitude: 12.9144825,
            longitude: 77.6491563
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 36,
            doctors: 39
        },
        capabilities: [
            "poisoning",
            "trauma",
            "other",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-769",
        name: "Ayaans Hospital",
        location: {
            latitude: 12.9782618,
            longitude: 77.6435889
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 76,
            doctors: 20
        },
        capabilities: [
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-770",
        name: "NIMHANS Department Of Psychiatric and Neuro Rehabilitation",
        location: {
            latitude: 12.9400516,
            longitude: 77.5954768
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 32,
            doctors: 11
        },
        capabilities: [
            "poisoning",
            "trauma",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-771",
        name: "Nimhans Mr-pet Center",
        location: {
            latitude: 12.9396498,
            longitude: 77.5967825
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 21,
            doctors: 16
        },
        capabilities: [
            "other",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-772",
        name: "NIMHANS Physiotherapy Center",
        location: {
            latitude: 12.9402037,
            longitude: 77.5954721
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 29,
            doctors: 31
        },
        capabilities: [
            "cardiac",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-773",
        name: "Zymus Hospitals",
        location: {
            latitude: 12.8784742,
            longitude: 77.5450234
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 95,
            doctors: 37
        },
        capabilities: [
            "stroke",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-774",
        name: "Cadabam's Hospitals",
        location: {
            latitude: 12.906071,
            longitude: 77.5869281
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 116,
            doctors: 23
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-775",
        name: "JJ Hospital",
        location: {
            latitude: 12.8350455,
            longitude: 77.693987
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 35,
            doctors: 34
        },
        capabilities: [
            "poisoning",
            "burn",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-776",
        name: "Fortis Hospital, Nagarbhavi",
        location: {
            latitude: 12.9596032,
            longitude: 77.5112481
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 113,
            doctors: 33
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-777",
        name: "MEDSTAR Speciality Hospital",
        location: {
            latitude: 13.058128,
            longitude: 77.5860405
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 68,
            doctors: 27
        },
        capabilities: [
            "other",
            "stroke",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-778",
        name: "Span Health Center",
        location: {
            latitude: 12.9774449,
            longitude: 77.6271297
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 115,
            doctors: 13
        },
        capabilities: [
            "other",
            "burn",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-779",
        name: "Smile Smart Dental & Implant Centre",
        location: {
            latitude: 12.8804891,
            longitude: 77.6552588
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 83,
            doctors: 24
        },
        capabilities: [
            "other",
            "burn",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-780",
        name: "Uvin Care Hospital",
        location: {
            latitude: 12.9778346,
            longitude: 77.6282837
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 76,
            doctors: 27
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-781",
        name: "Sai Sparsh Hospital",
        location: {
            latitude: 12.8933895,
            longitude: 77.6368614
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 69,
            doctors: 13
        },
        capabilities: [
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-782",
        name: "Bengaluru City Hospital",
        location: {
            latitude: 12.9075935,
            longitude: 77.5707809
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 98,
            doctors: 13
        },
        capabilities: [
            "respiratory",
            "poisoning",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-783",
        name: "Aspire Hospital",
        location: {
            latitude: 12.9971683,
            longitude: 77.6145878
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 112,
            doctors: 30
        },
        capabilities: [
            "other",
            "burn",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-784",
        name: "Dhee Hospital",
        location: {
            latitude: 12.8835095,
            longitude: 77.550214
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 52,
            doctors: 16
        },
        capabilities: [
            "other",
            "respiratory",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-785",
        name: "Sai Thunga Hospitals",
        location: {
            latitude: 12.9240012,
            longitude: 77.6481809
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 80,
            doctors: 37
        },
        capabilities: [
            "burn",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-786",
        name: "Esha Hospital",
        location: {
            latitude: 13.098072,
            longitude: 77.567378
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 67,
            doctors: 12
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-787",
        name: "Chirag Global Hospital",
        location: {
            latitude: 12.9058817,
            longitude: 77.6037517
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 29,
            doctors: 22
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-788",
        name: "Manipal Hospital OPD",
        location: {
            latitude: 13.0624568,
            longitude: 77.592227
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 113,
            doctors: 38
        },
        capabilities: [
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-789",
        name: "PMC Hospital",
        location: {
            latitude: 13.0065047,
            longitude: 77.5545009
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 102,
            doctors: 24
        },
        capabilities: [
            "burn",
            "stroke",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-790",
        name: "New Varalakshmi Hospital",
        location: {
            latitude: 12.9988382,
            longitude: 77.5550964
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 103,
            doctors: 11
        },
        capabilities: [
            "respiratory",
            "trauma",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-791",
        name: "Ashwini Hospital",
        location: {
            latitude: 13.0988482,
            longitude: 77.5978974
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 31,
            doctors: 26
        },
        capabilities: [
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-792",
        name: "Apollo Cradle Children's Hospital",
        location: {
            latitude: 13.002768,
            longitude: 77.5536287
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 35,
            doctors: 34
        },
        capabilities: [
            "respiratory",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-793",
        name: "Motherhood Children's Hospital",
        location: {
            latitude: 13.0620051,
            longitude: 77.5930638
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 39,
            doctors: 34
        },
        capabilities: [
            "trauma",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-794",
        name: "Abiramm Hospital",
        location: {
            latitude: 12.8728525,
            longitude: 77.6515698
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 44,
            doctors: 22
        },
        capabilities: [
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-795",
        name: "Netradhama",
        location: {
            latitude: 12.99743,
            longitude: 77.5510293
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 66,
            doctors: 28
        },
        capabilities: [
            "stroke",
            "trauma",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-796",
        name: "Sri Sai Hospital",
        location: {
            latitude: 12.871395,
            longitude: 77.6542581
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 55,
            doctors: 14
        },
        capabilities: [
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-797",
        name: "Raksha Hospital",
        location: {
            latitude: 12.8892622,
            longitude: 77.6505317
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 107,
            doctors: 19
        },
        capabilities: [
            "other",
            "stroke",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-798",
        name: "St Philomenas Hospital OPD Building",
        location: {
            latitude: 12.9658506,
            longitude: 77.6109015
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 113,
            doctors: 35
        },
        capabilities: [
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-799",
        name: "Hiremath Hospital",
        location: {
            latitude: 12.9754354,
            longitude: 77.5358965
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 60,
            doctors: 25
        },
        capabilities: [
            "other",
            "trauma",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-800",
        name: "Gawai Hospital",
        location: {
            latitude: 12.9962739,
            longitude: 77.6075693
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 74,
            doctors: 39
        },
        capabilities: [
            "respiratory",
            "cardiac",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-801",
        name: "Dr. Agarwal's Eye Hospital",
        location: {
            latitude: 12.9678752,
            longitude: 77.7500478
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 109,
            doctors: 34
        },
        capabilities: [
            "other",
            "cardiac",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-802",
        name: "Beams Hospitals Private Limited",
        location: {
            latitude: 12.9342277,
            longitude: 77.6296323
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 55,
            doctors: 31
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-803",
        name: "H Siddiah Referral Hospital",
        location: {
            latitude: 12.9569057,
            longitude: 77.5824398
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 86,
            doctors: 22
        },
        capabilities: [
            "trauma",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-804",
        name: "Suraksha Hospitsls",
        location: {
            latitude: 12.939978,
            longitude: 77.7467408
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 119,
            doctors: 11
        },
        capabilities: [
            "cardiac",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-805",
        name: "Aria",
        location: {
            latitude: 12.9433908,
            longitude: 77.7475266
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 56,
            doctors: 38
        },
        capabilities: [
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-806",
        name: "Suraksha Diagnostic Centre",
        location: {
            latitude: 12.9519538,
            longitude: 77.4990341
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 101,
            doctors: 33
        },
        capabilities: [
            "burn",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-807",
        name: "Cloud Nine",
        location: {
            latitude: 12.9566829,
            longitude: 77.7414284
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 107,
            doctors: 22
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-808",
        name: "Jindal Charitable Hospital",
        location: {
            latitude: 12.9937247,
            longitude: 77.5539724
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 58,
            doctors: 30
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-809",
        name: "Hosmat Hospitals",
        location: {
            latitude: 12.9644726,
            longitude: 77.6143018
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 118,
            doctors: 39
        },
        capabilities: [
            "other",
            "trauma",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-810",
        name: "Bangalore Gastro Centre",
        location: {
            latitude: 12.9160037,
            longitude: 77.6523087
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 117,
            doctors: 37
        },
        capabilities: [
            "burn",
            "trauma",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-811",
        name: "Narayana Nethralaya",
        location: {
            latitude: 12.980602,
            longitude: 77.7092104
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 91,
            doctors: 38
        },
        capabilities: [
            "cardiac",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-812",
        name: "Nethradhama",
        location: {
            latitude: 12.9762006,
            longitude: 77.7258334
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 110,
            doctors: 15
        },
        capabilities: [
            "cardiac",
            "respiratory",
            "stroke",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-813",
        name: "Sree Venkateshwara Hospital",
        location: {
            latitude: 12.9388501,
            longitude: 77.7472104
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 66,
            doctors: 17
        },
        capabilities: [
            "respiratory",
            "stroke",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-814",
        name: "AMC Multispeciality Hospital",
        location: {
            latitude: 12.9296701,
            longitude: 77.5764082
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 53,
            doctors: 12
        },
        capabilities: [
            "trauma",
            "poisoning",
            "other",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-815",
        name: "Proteeth Dental",
        location: {
            latitude: 12.9346221,
            longitude: 77.6284665
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 45,
            doctors: 33
        },
        capabilities: [
            "other",
            "cardiac",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-816",
        name: "Trilife Hospital",
        location: {
            latitude: 13.0170153,
            longitude: 77.6429262
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 83,
            doctors: 38
        },
        capabilities: [
            "other",
            "respiratory",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-817",
        name: "Big Hospitals",
        location: {
            latitude: 12.9405054,
            longitude: 77.5848675
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 101,
            doctors: 27
        },
        capabilities: [
            "trauma",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-818",
        name: "Motherhood",
        location: {
            latitude: 13.0202419,
            longitude: 77.6516186
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 95,
            doctors: 38
        },
        capabilities: [
            "trauma",
            "cardiac",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-819",
        name: "NASA Hospitals",
        location: {
            latitude: 13.0058328,
            longitude: 77.6597392
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 52,
            doctors: 12
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-820",
        name: "Bangalore Orthopeadic And Surgical Hospital",
        location: {
            latitude: 13.0219385,
            longitude: 77.6385853
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 89,
            doctors: 30
        },
        capabilities: [
            "burn",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-821",
        name: "Nano Hospitals",
        location: {
            latitude: 12.9070989,
            longitude: 77.5460762
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 72,
            doctors: 23
        },
        capabilities: [
            "stroke",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-822",
        name: "Chinmaya Mission Hospital",
        location: {
            latitude: 12.9779337,
            longitude: 77.6461885
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 99,
            doctors: 13
        },
        capabilities: [
            "stroke",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-823",
        name: "KLE Dental College",
        location: {
            latitude: 13.0305079,
            longitude: 77.535667
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 39,
            doctors: 32
        },
        capabilities: [
            "trauma",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-824",
        name: "Health Centre",
        location: {
            latitude: 13.0157723,
            longitude: 77.5638038
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 20,
            doctors: 27
        },
        capabilities: [
            "burn",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-825",
        name: "K C General Hospital",
        location: {
            latitude: 12.9950532,
            longitude: 77.5697431
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 51,
            doctors: 39
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-826",
        name: "St Marthas Hospital",
        location: {
            latitude: 12.9708175,
            longitude: 77.5857431
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 81,
            doctors: 29
        },
        capabilities: [
            "respiratory",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-827",
        name: "Vydehi Superspeciality Hospital",
        location: {
            latitude: 12.9681553,
            longitude: 77.5950421
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 78,
            doctors: 26
        },
        capabilities: [
            "stroke",
            "poisoning",
            "burn",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-828",
        name: "Jayanagar General Hospital",
        location: {
            latitude: 12.9261175,
            longitude: 77.592549
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 62,
            doctors: 20
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-829",
        name: "Hospital Complex",
        location: {
            latitude: 12.9383683,
            longitude: 77.5899069
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 71,
            doctors: 20
        },
        capabilities: [
            "burn",
            "respiratory",
            "other",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-830",
        name: "Sri Jayadeva Institute Of Cardiology",
        location: {
            latitude: 12.918526,
            longitude: 77.599254
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 118,
            doctors: 23
        },
        capabilities: [
            "trauma",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-831",
        name: "HMT Hospital",
        location: {
            latitude: 13.04958,
            longitude: 77.5509219
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 59,
            doctors: 14
        },
        capabilities: [
            "cardiac",
            "trauma",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-832",
        name: "BEL Hospital",
        location: {
            latitude: 13.0503387,
            longitude: 77.5567647
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 36,
            doctors: 22
        },
        capabilities: [
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-833",
        name: "Fortis Hospitals, Bannerghatta Road",
        location: {
            latitude: 12.8947511,
            longitude: 77.5985816
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 90,
            doctors: 11
        },
        capabilities: [
            "burn",
            "trauma",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-834",
        name: "Apollo Hospital",
        location: {
            latitude: 12.89632,
            longitude: 77.5983495
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 117,
            doctors: 17
        },
        capabilities: [
            "other",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-835",
        name: "Bhagwan Mahaveer Jain Hospital",
        location: {
            latitude: 12.9914884,
            longitude: 77.5952993
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 105,
            doctors: 32
        },
        capabilities: [
            "poisoning",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-836",
        name: "Bowring and Lady Curzon Hospitals",
        location: {
            latitude: 12.9830115,
            longitude: 77.6047116
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 67,
            doctors: 27
        },
        capabilities: [
            "stroke",
            "trauma",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-837",
        name: "Sir Haji Ismail Gosha Sait Hospital",
        location: {
            latitude: 12.9837175,
            longitude: 77.599792
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 108,
            doctors: 33
        },
        capabilities: [
            "poisoning",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-838",
        name: "Government Veterinary Hospital",
        location: {
            latitude: 12.9641529,
            longitude: 77.5676947
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 20,
            doctors: 18
        },
        capabilities: [
            "burn",
            "respiratory",
            "cardiac",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-839",
        name: "Railways Hospital",
        location: {
            latitude: 12.9798353,
            longitude: 77.5651105
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 55,
            doctors: 14
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-840",
        name: "Baptist Hospital",
        location: {
            latitude: 13.0347249,
            longitude: 77.5901708
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 90,
            doctors: 33
        },
        capabilities: [
            "trauma",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-841",
        name: "ESI Hospital",
        location: {
            latitude: 12.9713479,
            longitude: 77.6367243
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 47,
            doctors: 15
        },
        capabilities: [
            "poisoning",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-842",
        name: "Railways Hospital",
        location: {
            latitude: 13.1041114,
            longitude: 77.5829963
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 22,
            doctors: 15
        },
        capabilities: [
            "respiratory",
            "other",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-843",
        name: "KK Hospital",
        location: {
            latitude: 13.0971434,
            longitude: 77.5893851
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 47,
            doctors: 32
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-844",
        name: "ESI Dispensary",
        location: {
            latitude: 12.992488,
            longitude: 77.7062224
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 99,
            doctors: 20
        },
        capabilities: [
            "other",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-845",
        name: "Rajshekhar Hospital",
        location: {
            latitude: 12.9110143,
            longitude: 77.5797725
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 55,
            doctors: 35
        },
        capabilities: [
            "stroke",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-846",
        name: "Karunashraya",
        location: {
            latitude: 12.9574104,
            longitude: 77.7134875
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 101,
            doctors: 22
        },
        capabilities: [
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-847",
        name: "Sankara Eye Hospital",
        location: {
            latitude: 12.9571436,
            longitude: 77.7128215
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 101,
            doctors: 14
        },
        capabilities: [
            "respiratory",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-848",
        name: "Sparsh Hospital For Advanced Surgeries, Bengaluru Urban",
        location: {
            latitude: 12.9833345,
            longitude: 77.5945358
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 38,
            doctors: 19
        },
        capabilities: [
            "cardiac",
            "burn",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-849",
        name: "Sri Sathya Sai Institute of Higher Medical Sciences",
        location: {
            latitude: 12.9808814,
            longitude: 77.7303132
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 84,
            doctors: 27
        },
        capabilities: [
            "cardiac",
            "respiratory",
            "stroke",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-850",
        name: "Manipal Speciality Hospital",
        location: {
            latitude: 12.908884,
            longitude: 77.5136186
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 55,
            doctors: 24
        },
        capabilities: [
            "burn",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-851",
        name: "Manipal Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9587074,
            longitude: 77.6490296
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 105,
            doctors: 10
        },
        capabilities: [
            "trauma",
            "poisoning",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-852",
        name: "Chaitanya Nursing Home",
        location: {
            latitude: 13.0990774,
            longitude: 77.5861467
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 80,
            doctors: 25
        },
        capabilities: [
            "trauma",
            "respiratory",
            "poisoning",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-853",
        name: "Radhakrishna Multispeciality Hospital",
        location: {
            latitude: 12.9409612,
            longitude: 77.5455617
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 104,
            doctors: 20
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-854",
        name: "Rajalakshmi Multispeciality Hospital",
        location: {
            latitude: 12.9164637,
            longitude: 77.5796155
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 65,
            doctors: 25
        },
        capabilities: [
            "poisoning",
            "cardiac",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-855",
        name: "Manipal Hospital",
        location: {
            latitude: 12.9585777,
            longitude: 77.6481409
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 54,
            doctors: 12
        },
        capabilities: [
            "burn",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-856",
        name: "Indiranagar Government Hospital",
        location: {
            latitude: 12.9829238,
            longitude: 77.6446972
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 81,
            doctors: 36
        },
        capabilities: [
            "other",
            "poisoning",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-857",
        name: "Isolation Hospital",
        location: {
            latitude: 12.9839262,
            longitude: 77.6436191
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 94,
            doctors: 39
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-858",
        name: "Epidemic Disesase Hospital",
        location: {
            latitude: 12.9864155,
            longitude: 77.6437586
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 110,
            doctors: 17
        },
        capabilities: [
            "respiratory",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-859",
        name: "Employees' State Insurance Corporation Model Hospital",
        location: {
            latitude: 12.9909528,
            longitude: 77.5534579
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 89,
            doctors: 37
        },
        capabilities: [
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-860",
        name: "Vittala International Institute Of Ophthalmology, Hosakerehalli",
        location: {
            latitude: 12.9308127,
            longitude: 77.5412224
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 34,
            doctors: 38
        },
        capabilities: [
            "poisoning",
            "stroke",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-861",
        name: "ISRO Employees Hospital",
        location: {
            latitude: 12.966082,
            longitude: 77.656317
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 59,
            doctors: 13
        },
        capabilities: [
            "poisoning",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-862",
        name: "Ramaiah Memorial Hospital",
        location: {
            latitude: 13.0282176,
            longitude: 77.569775
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 46,
            doctors: 20
        },
        capabilities: [
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-863",
        name: "Hosmat Hospital",
        location: {
            latitude: 12.9691251,
            longitude: 77.6133228
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 68,
            doctors: 16
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-864",
        name: "Victoria Hospital",
        location: {
            latitude: 12.9634957,
            longitude: 77.5736948
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 66,
            doctors: 13
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-865",
        name: "Manipal Hospital",
        location: {
            latitude: 13.050953,
            longitude: 77.5938654
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 108,
            doctors: 17
        },
        capabilities: [
            "other",
            "stroke",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-866",
        name: "Dasappa Maternity Hospital",
        location: {
            latitude: 12.9643477,
            longitude: 77.5845256
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 71,
            doctors: 21
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-867",
        name: "Isolation Hospital",
        location: {
            latitude: 12.9858246,
            longitude: 77.6429529
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 90,
            doctors: 37
        },
        capabilities: [
            "stroke",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-868",
        name: "Sarvodaya Hospital",
        location: {
            latitude: 12.9803669,
            longitude: 77.5390159
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 95,
            doctors: 25
        },
        capabilities: [
            "cardiac",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-869",
        name: "Dasarahalli Referral Hospital",
        location: {
            latitude: 12.9773598,
            longitude: 77.5428202
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 36,
            doctors: 25
        },
        capabilities: [
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-870",
        name: "Nethra Eye Hospital",
        location: {
            latitude: 13.0271503,
            longitude: 77.5768623
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 67,
            doctors: 13
        },
        capabilities: [
            "respiratory",
            "poisoning",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-871",
        name: "Kidwai Memorial Institute of Oncology",
        location: {
            latitude: 12.936526,
            longitude: 77.5981388
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 46,
            doctors: 15
        },
        capabilities: [
            "trauma",
            "other",
            "respiratory",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-872",
        name: "Narayana Health",
        location: {
            latitude: 12.9904017,
            longitude: 77.7335762
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 55,
            doctors: 30
        },
        capabilities: [
            "respiratory",
            "stroke",
            "burn",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-873",
        name: "P.D. Hinduja Sindhi Hospital",
        location: {
            latitude: 12.9644217,
            longitude: 77.5926381
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 117,
            doctors: 19
        },
        capabilities: [
            "trauma",
            "respiratory",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-874",
        name: "Nmpc Hospital",
        location: {
            latitude: 13.0224158,
            longitude: 77.6580401
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 78,
            doctors: 11
        },
        capabilities: [
            "respiratory",
            "cardiac",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-875",
        name: "Shri Krishna Sevashrama Hospital",
        location: {
            latitude: 12.9173301,
            longitude: 77.5851028
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 101,
            doctors: 32
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-876",
        name: "Lions Seva Hospital",
        location: {
            latitude: 12.9555043,
            longitude: 77.7053083
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 85,
            doctors: 25
        },
        capabilities: [
            "trauma",
            "poisoning",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-877",
        name: "Sreerampura Referal Hospital",
        location: {
            latitude: 12.9907432,
            longitude: 77.5649082
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 78,
            doctors: 20
        },
        capabilities: [
            "trauma",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-878",
        name: "HAL Hospital",
        location: {
            latitude: 12.9623685,
            longitude: 77.6664034
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 74,
            doctors: 28
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-879",
        name: "Pro MED Hospital",
        location: {
            latitude: 12.9294355,
            longitude: 77.564005
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 91,
            doctors: 27
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-880",
        name: "Apollo Speciality Hospital",
        location: {
            latitude: 12.9362818,
            longitude: 77.5843424
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 68,
            doctors: 36
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-881",
        name: "Sevakshetra Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9216723,
            longitude: 77.5721649
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 64,
            doctors: 38
        },
        capabilities: [
            "cardiac",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-882",
        name: "Netradhama Hospital",
        location: {
            latitude: 12.9253024,
            longitude: 77.5774064
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 26,
            doctors: 14
        },
        capabilities: [
            "poisoning",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-883",
        name: "Subbaiah Hospital",
        location: {
            latitude: 13.0302068,
            longitude: 77.560704
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 111,
            doctors: 27
        },
        capabilities: [
            "stroke",
            "burn",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-884",
        name: "Fortis Hospitals Limited, Bengaluru Urban",
        location: {
            latitude: 12.9884932,
            longitude: 77.5945504
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 115,
            doctors: 16
        },
        capabilities: [
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-885",
        name: "ESI Hospital",
        location: {
            latitude: 12.9952564,
            longitude: 77.6527138
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 116,
            doctors: 28
        },
        capabilities: [
            "trauma",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-886",
        name: "Institute of Ayurveda and Integrative Medicine (I-AIM)",
        location: {
            latitude: 13.1256158,
            longitude: 77.5468302
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 103,
            doctors: 26
        },
        capabilities: [
            "cardiac",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-887",
        name: "Milann Fertility Center",
        location: {
            latitude: 12.9788013,
            longitude: 77.6380849
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 33,
            doctors: 14
        },
        capabilities: [
            "poisoning",
            "other",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-888",
        name: "Sanjeevani Hospital",
        location: {
            latitude: 13.0116917,
            longitude: 77.5438731
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 87,
            doctors: 23
        },
        capabilities: [
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-889",
        name: "Dr. Agarwal's Eye Hospital",
        location: {
            latitude: 12.9103586,
            longitude: 77.600474
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 57,
            doctors: 25
        },
        capabilities: [
            "respiratory",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-890",
        name: "Sanjay Gandhi Accident and Trauma Hospital",
        location: {
            latitude: 12.9356389,
            longitude: 77.5935945
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 54,
            doctors: 31
        },
        capabilities: [
            "trauma",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-891",
        name: "Sanjay Gandhi Accident and Trauma Hospital",
        location: {
            latitude: 12.9357711,
            longitude: 77.5939433
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 79,
            doctors: 19
        },
        capabilities: [
            "poisoning",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-892",
        name: "Greenview Hospital",
        location: {
            latitude: 12.9191928,
            longitude: 77.6381223
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 60,
            doctors: 15
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-893",
        name: "Leprosy Hospital",
        location: {
            latitude: 12.9744546,
            longitude: 77.5640222
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 86,
            doctors: 19
        },
        capabilities: [
            "other",
            "respiratory",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-894",
        name: "Ravi Kirloskar Memorial Hospital",
        location: {
            latitude: 13.0384676,
            longitude: 77.527802
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 102,
            doctors: 14
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-895",
        name: "Dr. Agarwal Eye Hospital",
        location: {
            latitude: 13.0943148,
            longitude: 77.58071
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 107,
            doctors: 25
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-896",
        name: "Annasawmy Mudaliar General Hospital",
        location: {
            latitude: 12.9999803,
            longitude: 77.6144986
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 114,
            doctors: 22
        },
        capabilities: [
            "respiratory",
            "other",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-897",
        name: "Arth Ayurveda World",
        location: {
            latitude: 12.9685282,
            longitude: 77.6457748
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 81,
            doctors: 38
        },
        capabilities: [
            "stroke",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-898",
        name: "Neha Prakash Hospital, Bengaluru Urban",
        location: {
            latitude: 13.1077314,
            longitude: 77.5717299
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 69,
            doctors: 34
        },
        capabilities: [
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-899",
        name: "Sri Lakshmi Venkateshwara Hospital",
        location: {
            latitude: 13.1056278,
            longitude: 77.5772997
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 107,
            doctors: 12
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-900",
        name: "Prolife Hospital",
        location: {
            latitude: 13.065084,
            longitude: 77.5936343
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 24,
            doctors: 20
        },
        capabilities: [
            "cardiac",
            "poisoning",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-901",
        name: "Amrik Hospital",
        location: {
            latitude: 12.9829065,
            longitude: 77.7478025
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 21,
            doctors: 36
        },
        capabilities: [
            "poisoning",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-902",
        name: "Indicus",
        location: {
            latitude: 13.0146094,
            longitude: 77.6464563
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 48,
            doctors: 33
        },
        capabilities: [
            "stroke",
            "trauma",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-903",
        name: "Fortis La Femme Hospital",
        location: {
            latitude: 12.9657452,
            longitude: 77.6097161
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 95,
            doctors: 14
        },
        capabilities: [
            "cardiac",
            "burn",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-904",
        name: "Shyamala Hospital",
        location: {
            latitude: 12.9714272,
            longitude: 77.627494
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 38,
            doctors: 32
        },
        capabilities: [
            "respiratory",
            "stroke",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-905",
        name: "Ways2Guide Speech Therapy Center",
        location: {
            latitude: 12.9599619,
            longitude: 77.7126304
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 61,
            doctors: 11
        },
        capabilities: [
            "burn",
            "cardiac",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-906",
        name: "Government Primary Health Centre",
        location: {
            latitude: 12.9718119,
            longitude: 77.693776
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 77,
            doctors: 35
        },
        capabilities: [
            "burn",
            "other",
            "stroke",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-907",
        name: "Kinder Women's Hospital & Fertility Center",
        location: {
            latitude: 12.9920515,
            longitude: 77.7064747
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 21,
            doctors: 11
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-908",
        name: "Medicare Diagnostics",
        location: {
            latitude: 13.0285228,
            longitude: 77.5587301
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 108,
            doctors: 31
        },
        capabilities: [
            "poisoning",
            "stroke",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-909",
        name: "Abhaya Hospital",
        location: {
            latitude: 12.9462798,
            longitude: 77.5947839
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 66,
            doctors: 19
        },
        capabilities: [
            "cardiac",
            "other",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-910",
        name: "MS Diabetes Speciality Center",
        location: {
            latitude: 12.9807106,
            longitude: 77.646011
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 52,
            doctors: 31
        },
        capabilities: [
            "poisoning",
            "trauma",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-911",
        name: "BBMP Maternity Hospital",
        location: {
            latitude: 12.9491979,
            longitude: 77.596808
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 86,
            doctors: 17
        },
        capabilities: [
            "respiratory",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-912",
        name: "ESI Hospital",
        location: {
            latitude: 12.9279948,
            longitude: 77.5894064
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 60,
            doctors: 18
        },
        capabilities: [
            "other",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-913",
        name: "Proteeth Dental",
        location: {
            latitude: 12.9346254,
            longitude: 77.6284672
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 55,
            doctors: 27
        },
        capabilities: [
            "other",
            "trauma",
            "respiratory",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-914",
        name: "Apollo Hospital",
        location: {
            latitude: 12.9883152,
            longitude: 77.5726942
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 51,
            doctors: 22
        },
        capabilities: [
            "cardiac",
            "trauma",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-915",
        name: "Supra Hospital",
        location: {
            latitude: 12.9928137,
            longitude: 77.5386455
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 32,
            doctors: 31
        },
        capabilities: [
            "poisoning",
            "other",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-916",
        name: "GM Hospital",
        location: {
            latitude: 12.9929463,
            longitude: 77.5386927
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 97,
            doctors: 35
        },
        capabilities: [
            "stroke",
            "trauma",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-917",
        name: "Sakhi Hospital (A Unit Of Prasad Healthcare Services)",
        location: {
            latitude: 12.9052747,
            longitude: 77.6031945
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 53,
            doctors: 26
        },
        capabilities: [
            "burn",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-918",
        name: "Prashanth Hospitals",
        location: {
            latitude: 12.9391883,
            longitude: 77.5513126
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 80,
            doctors: 13
        },
        capabilities: [
            "other",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-919",
        name: "Vagus Super Speciality Hospital",
        location: {
            latitude: 13.0084773,
            longitude: 77.5684217
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 117,
            doctors: 36
        },
        capabilities: [
            "respiratory",
            "cardiac",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-920",
        name: "Ovum Hospitals",
        location: {
            latitude: 13.0171298,
            longitude: 77.6432944
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 71,
            doctors: 12
        },
        capabilities: [
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-921",
        name: "Deepak Hospital",
        location: {
            latitude: 12.9262236,
            longitude: 77.5775108
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 106,
            doctors: 38
        },
        capabilities: [
            "cardiac",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-922",
        name: "ChanRe Rheumatology And Immunology Center And Research",
        location: {
            latitude: 12.9955667,
            longitude: 77.5354224
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 36,
            doctors: 16
        },
        capabilities: [
            "other",
            "burn",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-923",
        name: "Gopala Eye Care Centre",
        location: {
            latitude: 12.9883622,
            longitude: 77.5343261
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 35,
            doctors: 35
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-924",
        name: "Manipal Hospitals",
        location: {
            latitude: 12.9583496,
            longitude: 77.7454332
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 100,
            doctors: 25
        },
        capabilities: [
            "cardiac",
            "stroke",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-925",
        name: "Jeevika Hospital",
        location: {
            latitude: 12.9659074,
            longitude: 77.7025531
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 64,
            doctors: 12
        },
        capabilities: [
            "cardiac",
            "burn",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-926",
        name: "Sharada Medicals",
        location: {
            latitude: 13.0152635,
            longitude: 77.6467105
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 63,
            doctors: 19
        },
        capabilities: [
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-927",
        name: "Halasuru Referal Hospital",
        location: {
            latitude: 12.973692,
            longitude: 77.6266773
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 107,
            doctors: 28
        },
        capabilities: [
            "stroke",
            "poisoning",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-928",
        name: "Manipal Hospital",
        location: {
            latitude: 12.9882084,
            longitude: 77.5921572
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 39,
            doctors: 12
        },
        capabilities: [
            "trauma",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-929",
        name: "BBMP Primary Health Center",
        location: {
            latitude: 12.9591543,
            longitude: 77.6464476
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 87,
            doctors: 33
        },
        capabilities: [
            "other",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-930",
        name: "CSI Hospital",
        location: {
            latitude: 12.991305,
            longitude: 77.6011314
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 39,
            doctors: 37
        },
        capabilities: [
            "cardiac",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-931",
        name: "Government Hospital",
        location: {
            latitude: 12.9490229,
            longitude: 77.6199247
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 49,
            doctors: 29
        },
        capabilities: [
            "trauma",
            "burn",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-932",
        name: "Sagar Hospitals",
        location: {
            latitude: 12.9279005,
            longitude: 77.5998446
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 77,
            doctors: 28
        },
        capabilities: [
            "other",
            "trauma",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-933",
        name: "Sagar Hospital",
        location: {
            latitude: 12.9078674,
            longitude: 77.5651623
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 36,
            doctors: 22
        },
        capabilities: [
            "burn",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-934",
        name: "Command Hospital (Air Force)",
        location: {
            latitude: 12.9638649,
            longitude: 77.6279636
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 54,
            doctors: 14
        },
        capabilities: [
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-935",
        name: "Yelahanka Government Hospital",
        location: {
            latitude: 13.0995716,
            longitude: 77.5962927
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 43,
            doctors: 11
        },
        capabilities: [
            "respiratory",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-936",
        name: "St. Philomena's Hospital",
        location: {
            latitude: 12.9649568,
            longitude: 77.6111375
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 117,
            doctors: 33
        },
        capabilities: [
            "burn",
            "respiratory",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-937",
        name: "Government Maternity Hospital",
        location: {
            latitude: 12.9377267,
            longitude: 77.5697859
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 37,
            doctors: 32
        },
        capabilities: [
            "stroke",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-938",
        name: "HCG Cancer Hospital",
        location: {
            latitude: 12.9637737,
            longitude: 77.5896833
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 72,
            doctors: 16
        },
        capabilities: [
            "cardiac",
            "other",
            "trauma",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-939",
        name: "Al-Ameen Hospital",
        location: {
            latitude: 12.9898869,
            longitude: 77.5942601
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 21,
            doctors: 13
        },
        capabilities: [
            "respiratory",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-940",
        name: "St. Theresa's Hospital",
        location: {
            latitude: 13.0067504,
            longitude: 77.5529489
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 33,
            doctors: 21
        },
        capabilities: [
            "stroke",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-941",
        name: "Shirdi Sai Hospital",
        location: {
            latitude: 13.0668492,
            longitude: 77.6394164
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 21,
            doctors: 38
        },
        capabilities: [
            "stroke",
            "trauma",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-942",
        name: "Life Hospital",
        location: {
            latitude: 12.9756177,
            longitude: 77.6470614
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 27,
            doctors: 39
        },
        capabilities: [
            "stroke",
            "burn",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-943",
        name: "South City Hospital",
        location: {
            latitude: 12.9496516,
            longitude: 77.5803074
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 43,
            doctors: 22
        },
        capabilities: [
            "burn",
            "respiratory",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-944",
        name: "Manipal Hospitals Whitefield",
        location: {
            latitude: 12.9880712,
            longitude: 77.7286414
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 30,
            doctors: 25
        },
        capabilities: [
            "trauma",
            "burn",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-945",
        name: "Motherhood",
        location: {
            latitude: 12.9179135,
            longitude: 77.6722553
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 82,
            doctors: 25
        },
        capabilities: [
            "other",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-946",
        name: "Manipal Hospitals",
        location: {
            latitude: 12.9199685,
            longitude: 77.6652549
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 86,
            doctors: 11
        },
        capabilities: [
            "respiratory",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-947",
        name: "Suvarnamukhi",
        location: {
            latitude: 12.9135595,
            longitude: 77.6795552
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 86,
            doctors: 38
        },
        capabilities: [
            "trauma",
            "stroke",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-948",
        name: "Sakra World",
        location: {
            latitude: 12.9322182,
            longitude: 77.6853258
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 57,
            doctors: 38
        },
        capabilities: [
            "respiratory",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-949",
        name: "Rainbow Children's Hospital",
        location: {
            latitude: 12.9753078,
            longitude: 77.697834
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 51,
            doctors: 37
        },
        capabilities: [
            "respiratory",
            "cardiac",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-950",
        name: "Agadi Hospital",
        location: {
            latitude: 12.9492019,
            longitude: 77.5977936
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 20,
            doctors: 16
        },
        capabilities: [
            "trauma",
            "cardiac",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-951",
        name: "Punarjani Ayurvedic Multispeciality Hospital",
        location: {
            latitude: 12.8964133,
            longitude: 77.6950639
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 20,
            doctors: 29
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-952",
        name: "Svastha Hospital",
        location: {
            latitude: 12.9659316,
            longitude: 77.7493736
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 48,
            doctors: 34
        },
        capabilities: [
            "trauma",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-953",
        name: "Sparsh Hospital",
        location: {
            latitude: 13.0277509,
            longitude: 77.5429924
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 113,
            doctors: 32
        },
        capabilities: [
            "trauma",
            "respiratory",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-954",
        name: "BMS Hospital",
        location: {
            latitude: 12.9413364,
            longitude: 77.5674679
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 65,
            doctors: 10
        },
        capabilities: [
            "burn",
            "poisoning",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-955",
        name: "Sarjapura Urban Primary Health Centre",
        location: {
            latitude: 12.8605317,
            longitude: 77.7840442
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 30,
            doctors: 10
        },
        capabilities: [
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-956",
        name: "Medical Centre",
        location: {
            latitude: 12.9246391,
            longitude: 77.5006239
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 89,
            doctors: 39
        },
        capabilities: [
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-957",
        name: "M C Modi Eye Hospital",
        location: {
            latitude: 12.9980069,
            longitude: 77.5459005
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 107,
            doctors: 28
        },
        capabilities: [
            "stroke",
            "trauma",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-958",
        name: "Pushpa Nursing Home",
        location: {
            latitude: 12.9689357,
            longitude: 77.7494971
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 97,
            doctors: 10
        },
        capabilities: [
            "trauma",
            "burn",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-959",
        name: "Nrr Hospital",
        location: {
            latitude: 13.0725243,
            longitude: 77.5035875
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 43,
            doctors: 37
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-960",
        name: "Arunodaya Hospitals",
        location: {
            latitude: 13.057066,
            longitude: 77.508511
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 63,
            doctors: 39
        },
        capabilities: [
            "other",
            "cardiac",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-961",
        name: "Dr Ramachandra Hospital",
        location: {
            latitude: 13.048319,
            longitude: 77.5080361
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 73,
            doctors: 33
        },
        capabilities: [
            "cardiac",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-962",
        name: "Government Hospital",
        location: {
            latitude: 13.0991845,
            longitude: 77.5968656
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 36,
            doctors: 14
        },
        capabilities: [
            "stroke",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-963",
        name: "Deeksha Hospital",
        location: {
            latitude: 13.0982401,
            longitude: 77.5970471
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 66,
            doctors: 28
        },
        capabilities: [
            "stroke",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-964",
        name: "Puneeth Rajkumar Multispeciality Hospital",
        location: {
            latitude: 12.9414292,
            longitude: 77.5226387
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 102,
            doctors: 39
        },
        capabilities: [
            "respiratory",
            "burn",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-965",
        name: "CRPF Hospital",
        location: {
            latitude: 13.1247842,
            longitude: 77.5764128
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 55,
            doctors: 14
        },
        capabilities: [
            "respiratory",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-966",
        name: "HOSMAT Hospital, Kalyan Nagar",
        location: {
            latitude: 13.028489,
            longitude: 77.6325562
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 42,
            doctors: 19
        },
        capabilities: [
            "stroke",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-967",
        name: "Navachethana Hospital",
        location: {
            latitude: 13.1036126,
            longitude: 77.5837987
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 71,
            doctors: 37
        },
        capabilities: [
            "stroke",
            "other",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-968",
        name: "Natus Woman and Children Hospital",
        location: {
            latitude: 12.9427199,
            longitude: 77.525514
        },
        capacity: {
            icuBeds: 23,
            generalBeds: 77,
            doctors: 29
        },
        capabilities: [
            "burn",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-969",
        name: "Jindal Naturecure Institute hospital",
        location: {
            latitude: 13.0507482,
            longitude: 77.4832827
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 43,
            doctors: 15
        },
        capabilities: [
            "burn",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-970",
        name: "ITI General Hospital",
        location: {
            latitude: 13.0046358,
            longitude: 77.6823567
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 94,
            doctors: 30
        },
        capabilities: [
            "respiratory",
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-971",
        name: "JC Nagar Municipal Hospital",
        location: {
            latitude: 13.0099309,
            longitude: 77.5941222
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 80,
            doctors: 14
        },
        capabilities: [
            "respiratory",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-972",
        name: "NIKISA Dementia Village",
        location: {
            latitude: 13.1114469,
            longitude: 77.5550611
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 114,
            doctors: 23
        },
        capabilities: [
            "trauma",
            "respiratory",
            "stroke",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-973",
        name: "Government Homeopathic Hospital",
        location: {
            latitude: 12.9830337,
            longitude: 77.5365274
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 43,
            doctors: 39
        },
        capabilities: [
            "stroke",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-974",
        name: "Dr. P.R. Desai Hospital Pvt Ltd",
        location: {
            latitude: 12.9863583,
            longitude: 77.5792111
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 37,
            doctors: 38
        },
        capabilities: [
            "other",
            "poisoning",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-975",
        name: "Manipal Hospital Yeshwantpur",
        location: {
            latitude: 13.0142942,
            longitude: 77.5560784
        },
        capacity: {
            icuBeds: 5,
            generalBeds: 110,
            doctors: 19
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-976",
        name: "Shifa Hospital, Bengaluru Urban",
        location: {
            latitude: 12.9900045,
            longitude: 77.5989675
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 94,
            doctors: 21
        },
        capabilities: [
            "poisoning",
            "respiratory",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-977",
        name: "Diacon Hospital",
        location: {
            latitude: 13.0037443,
            longitude: 77.5498305
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 119,
            doctors: 14
        },
        capabilities: [
            "trauma",
            "cardiac",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-978",
        name: "Fortis Hospital",
        location: {
            latitude: 13.0022012,
            longitude: 77.5491011
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 116,
            doctors: 25
        },
        capabilities: [
            "stroke",
            "burn",
            "poisoning",
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-979",
        name: "Aster CMI Hospital",
        location: {
            latitude: 13.0545318,
            longitude: 77.5918707
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 28,
            doctors: 32
        },
        capabilities: [
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-980",
        name: "Rainbow Children's Hospital",
        location: {
            latitude: 13.0655778,
            longitude: 77.5937383
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 106,
            doctors: 33
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-981",
        name: "Cloudnine",
        location: {
            latitude: 12.9244197,
            longitude: 77.6724971
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 47,
            doctors: 14
        },
        capabilities: [
            "burn",
            "cardiac",
            "respiratory",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-982",
        name: "Spandana",
        location: {
            latitude: 12.8670052,
            longitude: 77.7671289
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 47,
            doctors: 30
        },
        capabilities: [
            "other",
            "trauma",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-983",
        name: "BN Specialty Hospital",
        location: {
            latitude: 12.9124863,
            longitude: 77.6765573
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 33,
            doctors: 21
        },
        capabilities: [
            "cardiac",
            "poisoning",
            "stroke",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-984",
        name: "Aster Women and Children Hospital",
        location: {
            latitude: 12.9883438,
            longitude: 77.7339468
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 83,
            doctors: 24
        },
        capabilities: [
            "poisoning",
            "cardiac",
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-985",
        name: "Prakriya Hospital",
        location: {
            latitude: 13.0463371,
            longitude: 77.5065296
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 24,
            doctors: 17
        },
        capabilities: [
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-986",
        name: "Motherhood Whitefield",
        location: {
            latitude: 12.9589657,
            longitude: 77.7467194
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 36,
            doctors: 26
        },
        capabilities: [
            "trauma",
            "respiratory",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-987",
        name: "People Tree Hospitals",
        location: {
            latitude: 13.0282887,
            longitude: 77.5391464
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 20,
            doctors: 35
        },
        capabilities: [
            "trauma",
            "cardiac",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-988",
        name: "Apollo Cradle",
        location: {
            latitude: 12.9667949,
            longitude: 77.7172659
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 25,
            doctors: 18
        },
        capabilities: [
            "other",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-989",
        name: "Charaka Super Speciality Hospital",
        location: {
            latitude: 12.9896386,
            longitude: 77.60226
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 76,
            doctors: 24
        },
        capabilities: [
            "stroke",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-990",
        name: "Karunalayam Hospital",
        location: {
            latitude: 12.9112661,
            longitude: 77.7075837
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 68,
            doctors: 28
        },
        capabilities: [
            "trauma",
            "stroke",
            "burn",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-991",
        name: "Phoenix Hospital",
        location: {
            latitude: 12.9166101,
            longitude: 77.6450517
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 34,
            doctors: 35
        },
        capabilities: [
            "trauma",
            "stroke",
            "respiratory",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-992",
        name: "ESI Hospital Malleshwaram Branch",
        location: {
            latitude: 13.0151199,
            longitude: 77.5600013
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 96,
            doctors: 17
        },
        capabilities: [
            "burn",
            "stroke",
            "other"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-993",
        name: "Bhoomi Diagnostics",
        location: {
            latitude: 12.9116986,
            longitude: 77.6495441
        },
        capacity: {
            icuBeds: 19,
            generalBeds: 102,
            doctors: 16
        },
        capabilities: [
            "cardiac",
            "trauma",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-994",
        name: "Narayana Multispeciality Hospital",
        location: {
            latitude: 12.9082086,
            longitude: 77.6435134
        },
        capacity: {
            icuBeds: 21,
            generalBeds: 57,
            doctors: 23
        },
        capabilities: [
            "stroke",
            "cardiac",
            "poisoning"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-995",
        name: "Rainbow Children's Hospital",
        location: {
            latitude: 12.9034004,
            longitude: 77.6007617
        },
        capacity: {
            icuBeds: 11,
            generalBeds: 91,
            doctors: 24
        },
        capabilities: [
            "burn",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-996",
        name: "Sparsh Hospital",
        location: {
            latitude: 13.0949654,
            longitude: 77.5986449
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 61,
            doctors: 31
        },
        capabilities: [
            "cardiac",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-997",
        name: "Miracle Hospital",
        location: {
            latitude: 13.0091404,
            longitude: 77.7590705
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 101,
            doctors: 12
        },
        capabilities: [
            "poisoning",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-998",
        name: "Suguna Hospital",
        location: {
            latitude: 12.9882302,
            longitude: 77.5600393
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 29,
            doctors: 30
        },
        capabilities: [
            "poisoning"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-999",
        name: "Sparsh Hospital, Hennur",
        location: {
            latitude: 13.040171,
            longitude: 77.6406846
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 119,
            doctors: 13
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-1000",
        name: "Dr Agarwal's Eye Hospital",
        location: {
            latitude: 12.9569001,
            longitude: 77.6047605
        },
        capacity: {
            icuBeds: 22,
            generalBeds: 105,
            doctors: 17
        },
        capabilities: [
            "cardiac",
            "poisoning",
            "other"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-1001",
        name: "Government Primary Health Centre",
        location: {
            latitude: 13.097274,
            longitude: 77.6477522
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 109,
            doctors: 36
        },
        capabilities: [
            "trauma",
            "stroke"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-1002",
        name: "Snehadaan Hospital",
        location: {
            latitude: 12.9017283,
            longitude: 77.7155216
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 21,
            doctors: 37
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-1003",
        name: "SS Sparsh Hospital",
        location: {
            latitude: 12.9264187,
            longitude: 77.5216783
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 37,
            doctors: 37
        },
        capabilities: [
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-1004",
        name: "KPTCL Hospital Yelahanka",
        location: {
            latitude: 13.1166792,
            longitude: 77.5800714
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 98,
            doctors: 11
        },
        capabilities: [
            "cardiac",
            "trauma",
            "other",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-1005",
        name: "Cloud Nine",
        location: {
            latitude: 12.9156928,
            longitude: 77.6752029
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 39,
            doctors: 25
        },
        capabilities: [
            "cardiac",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-1006",
        name: "BBMP Hospital",
        location: {
            latitude: 12.9949885,
            longitude: 77.5937862
        },
        capacity: {
            icuBeds: 6,
            generalBeds: 59,
            doctors: 18
        },
        capabilities: [
            "cardiac",
            "respiratory"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-1007",
        name: "Manipal Hospital North",
        location: {
            latitude: 13.1076284,
            longitude: 77.6033814
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 97,
            doctors: 36
        },
        capabilities: [
            "trauma",
            "stroke",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-1008",
        name: "Jnana Sanjeevini",
        location: {
            latitude: 12.9162232,
            longitude: 77.5890151
        },
        capacity: {
            icuBeds: 20,
            generalBeds: 49,
            doctors: 23
        },
        capabilities: [
            "respiratory",
            "stroke"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-1009",
        name: "Anupamaa Hospital",
        location: {
            latitude: 13.0937967,
            longitude: 77.5893672
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 29,
            doctors: 16
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-1010",
        name: "Brains Super Speciality Hospital",
        location: {
            latitude: 12.9478274,
            longitude: 77.5924806
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 63,
            doctors: 22
        },
        capabilities: [
            "burn",
            "other",
            "trauma"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-1011",
        name: "PESU HOSPITAL",
        location: {
            latitude: 12.8628027,
            longitude: 77.6663559
        },
        capacity: {
            icuBeds: 16,
            generalBeds: 65,
            doctors: 33
        },
        capabilities: [
            "respiratory",
            "other",
            "cardiac"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-1012",
        name: "Vasavi Hospital",
        location: {
            latitude: 12.9031532,
            longitude: 77.5603082
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 98,
            doctors: 31
        },
        capabilities: [
            "other",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-1013",
        name: "Brains Hospital",
        location: {
            latitude: 13.1183866,
            longitude: 77.6082057
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 61,
            doctors: 20
        },
        capabilities: [
            "stroke",
            "cardiac",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-1014",
        name: "ESI Hospital Peenya",
        location: {
            latitude: 13.0249864,
            longitude: 77.530936
        },
        capacity: {
            icuBeds: 10,
            generalBeds: 45,
            doctors: 18
        },
        capabilities: [
            "respiratory",
            "poisoning",
            "other"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-1015",
        name: "Rainbow Childrens Hospital",
        location: {
            latitude: 12.9202359,
            longitude: 77.6674739
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 38,
            doctors: 18
        },
        capabilities: [
            "other",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-1016",
        name: "Safa Medicure Hospital",
        location: {
            latitude: 12.9447394,
            longitude: 77.5964164
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 82,
            doctors: 18
        },
        capabilities: [
            "trauma",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-1017",
        name: "Chaitanya Medical Centre Maternity and Surgical Care",
        location: {
            latitude: 13.0924907,
            longitude: 77.5863327
        },
        capacity: {
            icuBeds: 14,
            generalBeds: 105,
            doctors: 16
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-1018",
        name: "Rangadore Memorial Hospital",
        location: {
            latitude: 12.9538911,
            longitude: 77.5711462
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 111,
            doctors: 13
        },
        capabilities: [
            "trauma",
            "cardiac",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-1019",
        name: "Trustwell Hospitals",
        location: {
            latitude: 12.9606538,
            longitude: 77.5840403
        },
        capacity: {
            icuBeds: 8,
            generalBeds: 25,
            doctors: 24
        },
        capabilities: [
            "stroke",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-1020",
        name: "BEML Hospital",
        location: {
            latitude: 12.971172,
            longitude: 77.6651791
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 99,
            doctors: 30
        },
        capabilities: [
            "stroke",
            "burn",
            "respiratory"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-1021",
        name: "Sri Vishveshathirtha Memorial Hospital",
        location: {
            latitude: 12.9566836,
            longitude: 77.712382
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 68,
            doctors: 10
        },
        capabilities: [
            "poisoning",
            "burn"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-1022",
        name: "Government Maternity Hospital",
        location: {
            latitude: 13.0214559,
            longitude: 77.553599
        },
        capacity: {
            icuBeds: 17,
            generalBeds: 116,
            doctors: 32
        },
        capabilities: [
            "poisoning",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-1023",
        name: "Government Multi-Speciality Hospital",
        location: {
            latitude: 12.9510658,
            longitude: 77.4810597
        },
        capacity: {
            icuBeds: 15,
            generalBeds: 82,
            doctors: 18
        },
        capabilities: [
            "burn",
            "other",
            "poisoning",
            "trauma"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-1024",
        name: "Yadiyuru Maternity Hospital",
        location: {
            latitude: 12.9271061,
            longitude: 77.576658
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 106,
            doctors: 22
        },
        capabilities: [
            "burn",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-1025",
        name: "Ayurveda Prathisthana Hospital",
        location: {
            latitude: 12.9267938,
            longitude: 77.5772972
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 88,
            doctors: 26
        },
        capabilities: [
            "stroke",
            "burn"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-1026",
        name: "East Point Hospital and Medical College",
        location: {
            latitude: 13.0529326,
            longitude: 77.7172701
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 118,
            doctors: 29
        },
        capabilities: [
            "respiratory"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-1027",
        name: "Vimalaya Hospital",
        location: {
            latitude: 12.8348606,
            longitude: 77.6807681
        },
        capacity: {
            icuBeds: 24,
            generalBeds: 24,
            doctors: 32
        },
        capabilities: [
            "respiratory",
            "poisoning",
            "burn"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-1028",
        name: "Shanthinilaya Hospital",
        location: {
            latitude: 13.0207585,
            longitude: 77.7016687
        },
        capacity: {
            icuBeds: 18,
            generalBeds: 74,
            doctors: 29
        },
        capabilities: [
            "stroke",
            "cardiac"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-1029",
        name: "Apex Hospital",
        location: {
            latitude: 13.115139,
            longitude: 77.6339212
        },
        capacity: {
            icuBeds: 7,
            generalBeds: 105,
            doctors: 14
        },
        capabilities: [
            "other",
            "trauma"
        ],
        affordability: "standard"
    },
    {
        id: "hosp-1030",
        name: "Vignan Hospital",
        location: {
            latitude: 12.9438635,
            longitude: 77.5969221
        },
        capacity: {
            icuBeds: 13,
            generalBeds: 60,
            doctors: 14
        },
        capabilities: [
            "trauma",
            "other",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-1031",
        name: "Mahanandi",
        location: {
            latitude: 12.967036,
            longitude: 77.717977
        },
        capacity: {
            icuBeds: 12,
            generalBeds: 111,
            doctors: 30
        },
        capabilities: [
            "stroke",
            "poisoning"
        ],
        affordability: "budget"
    },
    {
        id: "hosp-1032",
        name: "Aarogya Hastha Hospital",
        location: {
            latitude: 12.9005656,
            longitude: 77.6757868
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 107,
            doctors: 29
        },
        capabilities: [
            "cardiac",
            "stroke"
        ],
        affordability: "premium"
    },
    {
        id: "hosp-1033",
        name: "Life Care Hospital",
        location: {
            latitude: 12.9239736,
            longitude: 77.6133232
        },
        capacity: {
            icuBeds: 9,
            generalBeds: 95,
            doctors: 28
        },
        capabilities: [
            "cardiac"
        ],
        affordability: "budget"
    }
];
const mockAmbulances = [
    {
        id: 'amb-001',
        name: 'Unit 101 (Central BLR)',
        location: {
            latitude: 12.9716,
            longitude: 77.5946
        },
        status: 'idle',
        lastUpdate: Date.now()
    },
    {
        id: 'amb-002',
        name: 'Unit 102 (Koramangala)',
        location: {
            latitude: 12.9279,
            longitude: 77.6271
        },
        status: 'idle',
        lastUpdate: Date.now()
    },
    {
        id: 'amb-003',
        name: 'Unit 103 (Indiranagar)',
        location: {
            latitude: 12.9784,
            longitude: 77.6408
        },
        status: 'idle',
        lastUpdate: Date.now()
    },
    {
        id: 'amb-004',
        name: 'Unit 104 (Whitefield)',
        location: {
            latitude: 12.9698,
            longitude: 77.7499
        },
        status: 'idle',
        lastUpdate: Date.now()
    },
    {
        id: 'amb-005',
        name: 'Unit 105 (Jayanagar)',
        location: {
            latitude: 12.9299,
            longitude: 77.5826
        },
        status: 'idle',
        lastUpdate: Date.now()
    }
];
const mockTrafficSignals = [
    {
        id: "ts-17327106",
        name: "Signal 1",
        location: {
            latitude: 12.917209,
            longitude: 77.5858603
        },
        status: "red"
    },
    {
        id: "ts-17327420",
        name: "Signal 2",
        location: {
            latitude: 13.0952244,
            longitude: 77.5941775
        },
        status: "yellow"
    },
    {
        id: "ts-26529522",
        name: "Signal 3",
        location: {
            latitude: 12.9746109,
            longitude: 77.6200468
        },
        status: "red"
    },
    {
        id: "ts-26529553",
        name: "Signal 4",
        location: {
            latitude: 12.9815923,
            longitude: 77.6232203
        },
        status: "green"
    },
    {
        id: "ts-60952260",
        name: "Signal 5",
        location: {
            latitude: 12.9660797,
            longitude: 77.6067658
        },
        status: "green"
    },
    {
        id: "ts-60952288",
        name: "Elgin Junction",
        location: {
            latitude: 12.9580529,
            longitude: 77.6059189
        },
        status: "green"
    },
    {
        id: "ts-60952294",
        name: "Signal 7",
        location: {
            latitude: 12.9599337,
            longitude: 77.6019168
        },
        status: "red"
    },
    {
        id: "ts-60952479",
        name: "Signal 8",
        location: {
            latitude: 12.9706326,
            longitude: 77.6103062
        },
        status: "green"
    },
    {
        id: "ts-61746200",
        name: "Signal 9",
        location: {
            latitude: 12.9400273,
            longitude: 77.6253351
        },
        status: "green"
    },
    {
        id: "ts-61746217",
        name: "Signal 10",
        location: {
            latitude: 12.9427582,
            longitude: 77.6225279
        },
        status: "green"
    },
    {
        id: "ts-61748543",
        name: "Signal 11",
        location: {
            latitude: 12.9685209,
            longitude: 77.6144953
        },
        status: "red"
    },
    {
        id: "ts-61748553",
        name: "Signal 12",
        location: {
            latitude: 12.952415,
            longitude: 77.6202156
        },
        status: "green"
    },
    {
        id: "ts-62053503",
        name: "Signal 13",
        location: {
            latitude: 12.960517,
            longitude: 77.5043062
        },
        status: "red"
    },
    {
        id: "ts-62053645",
        name: "Signal 14",
        location: {
            latitude: 12.960513,
            longitude: 77.5043695
        },
        status: "red"
    },
    {
        id: "ts-62067292",
        name: "Signal 15",
        location: {
            latitude: 12.9613763,
            longitude: 77.5840428
        },
        status: "green"
    },
    {
        id: "ts-158687972",
        name: "Signal 16",
        location: {
            latitude: 12.9541872,
            longitude: 77.5852663
        },
        status: "yellow"
    },
    {
        id: "ts-176470763",
        name: "Seeta Circle",
        location: {
            latitude: 12.937997,
            longitude: 77.5497383
        },
        status: "green"
    },
    {
        id: "ts-245614692",
        name: "Signal 18",
        location: {
            latitude: 12.9484823,
            longitude: 77.5737822
        },
        status: "green"
    },
    {
        id: "ts-246171012",
        name: "Signal 19",
        location: {
            latitude: 12.9656578,
            longitude: 77.5869253
        },
        status: "green"
    },
    {
        id: "ts-246171013",
        name: "Signal 20",
        location: {
            latitude: 12.9636229,
            longitude: 77.5851479
        },
        status: "red"
    },
    {
        id: "ts-246171016",
        name: "Signal 21",
        location: {
            latitude: 12.9577464,
            longitude: 77.5821331
        },
        status: "red"
    },
    {
        id: "ts-247972974",
        name: "Signal 22",
        location: {
            latitude: 12.907437,
            longitude: 77.6005725
        },
        status: "red"
    },
    {
        id: "ts-247989220",
        name: "Signal 23",
        location: {
            latitude: 12.9164504,
            longitude: 77.6101986
        },
        status: "red"
    },
    {
        id: "ts-247989224",
        name: "Signal 24",
        location: {
            latitude: 12.9163018,
            longitude: 77.6152765
        },
        status: "green"
    },
    {
        id: "ts-247991553",
        name: "Signal 25",
        location: {
            latitude: 12.9284001,
            longitude: 77.6005936
        },
        status: "red"
    },
    {
        id: "ts-247991563",
        name: "Signal 26",
        location: {
            latitude: 12.9526686,
            longitude: 77.6051573
        },
        status: "green"
    },
    {
        id: "ts-248181114",
        name: "Signal 27",
        location: {
            latitude: 12.9459107,
            longitude: 77.5955342
        },
        status: "green"
    },
    {
        id: "ts-248455447",
        name: "Signal 28",
        location: {
            latitude: 12.9646748,
            longitude: 77.5967276
        },
        status: "green"
    },
    {
        id: "ts-248455465",
        name: "Signal 29",
        location: {
            latitude: 12.9679192,
            longitude: 77.600212
        },
        status: "red"
    },
    {
        id: "ts-248459796",
        name: "Signal 30",
        location: {
            latitude: 12.9721004,
            longitude: 77.6070443
        },
        status: "yellow"
    },
    {
        id: "ts-248525409",
        name: "Signal 31",
        location: {
            latitude: 12.9538564,
            longitude: 77.5913354
        },
        status: "green"
    },
    {
        id: "ts-248552486",
        name: "Signal 32",
        location: {
            latitude: 12.8929011,
            longitude: 77.610479
        },
        status: "green"
    },
    {
        id: "ts-248671285",
        name: "Signal 33",
        location: {
            latitude: 12.9454711,
            longitude: 77.5285693
        },
        status: "green"
    },
    {
        id: "ts-248678559",
        name: "Signal 34",
        location: {
            latitude: 12.9252707,
            longitude: 77.550087
        },
        status: "red"
    },
    {
        id: "ts-248678594",
        name: "Signal 35",
        location: {
            latitude: 12.9064246,
            longitude: 77.5734546
        },
        status: "green"
    },
    {
        id: "ts-248679505",
        name: "Signal 36",
        location: {
            latitude: 12.9057665,
            longitude: 77.5427034
        },
        status: "green"
    },
    {
        id: "ts-248679597",
        name: "Signal 37",
        location: {
            latitude: 12.9266364,
            longitude: 77.5612616
        },
        status: "green"
    },
    {
        id: "ts-248679644",
        name: "Signal 38",
        location: {
            latitude: 12.9288776,
            longitude: 77.566296
        },
        status: "red"
    },
    {
        id: "ts-248680032",
        name: "Signal 39",
        location: {
            latitude: 12.9208657,
            longitude: 77.5745887
        },
        status: "red"
    },
    {
        id: "ts-248680033",
        name: "Signal 40",
        location: {
            latitude: 12.9211023,
            longitude: 77.5734649
        },
        status: "red"
    },
    {
        id: "ts-248680036",
        name: "Signal 41",
        location: {
            latitude: 12.9294201,
            longitude: 77.5736196
        },
        status: "green"
    },
    {
        id: "ts-248776663",
        name: "Signal 42",
        location: {
            latitude: 12.9369042,
            longitude: 77.5738183
        },
        status: "red"
    },
    {
        id: "ts-248808777",
        name: "Signal 43",
        location: {
            latitude: 12.9437041,
            longitude: 77.5736802
        },
        status: "yellow"
    },
    {
        id: "ts-248808932",
        name: "Signal 44",
        location: {
            latitude: 12.9436325,
            longitude: 77.5678527
        },
        status: "red"
    },
    {
        id: "ts-248808939",
        name: "Signal 45",
        location: {
            latitude: 12.9436249,
            longitude: 77.5802208
        },
        status: "yellow"
    },
    {
        id: "ts-248809641",
        name: "Signal 46",
        location: {
            latitude: 12.9368768,
            longitude: 77.5752561
        },
        status: "green"
    },
    {
        id: "ts-248809814",
        name: "Signal 47",
        location: {
            latitude: 12.9390574,
            longitude: 77.571568
        },
        status: "green"
    },
    {
        id: "ts-248838859",
        name: "Signal 48",
        location: {
            latitude: 12.9393825,
            longitude: 77.5666834
        },
        status: "red"
    },
    {
        id: "ts-248839215",
        name: "Signal 49",
        location: {
            latitude: 12.916966,
            longitude: 77.5736454
        },
        status: "green"
    },
    {
        id: "ts-249072291",
        name: "Signal 50",
        location: {
            latitude: 12.923994,
            longitude: 77.5532717
        },
        status: "red"
    },
    {
        id: "ts-249072292",
        name: "Signal 51",
        location: {
            latitude: 12.9239157,
            longitude: 77.5532445
        },
        status: "green"
    },
    {
        id: "ts-249074049",
        name: "Signal 52",
        location: {
            latitude: 12.9284545,
            longitude: 77.5972154
        },
        status: "green"
    },
    {
        id: "ts-249074386",
        name: "Yediyuru Circle",
        location: {
            latitude: 12.9309078,
            longitude: 77.5761739
        },
        status: "green"
    },
    {
        id: "ts-249075247",
        name: "Karnataka Bank Junction",
        location: {
            latitude: 12.9206044,
            longitude: 77.5951629
        },
        status: "red"
    },
    {
        id: "ts-249075973",
        name: "Signal 55",
        location: {
            latitude: 12.9173822,
            longitude: 77.5895121
        },
        status: "red"
    },
    {
        id: "ts-249075975",
        name: "Signal 56",
        location: {
            latitude: 12.9169561,
            longitude: 77.5969019
        },
        status: "green"
    },
    {
        id: "ts-249076302",
        name: "Signal 57",
        location: {
            latitude: 12.957309,
            longitude: 77.5696091
        },
        status: "red"
    },
    {
        id: "ts-249076305",
        name: "Signal 58",
        location: {
            latitude: 12.9482704,
            longitude: 77.5700739
        },
        status: "green"
    },
    {
        id: "ts-249080527",
        name: "Signal 59",
        location: {
            latitude: 12.9279676,
            longitude: 77.5463249
        },
        status: "red"
    },
    {
        id: "ts-249081188",
        name: "Signal 60",
        location: {
            latitude: 12.9622247,
            longitude: 77.5757939
        },
        status: "red"
    },
    {
        id: "ts-249081285",
        name: "Signal 61",
        location: {
            latitude: 12.9596672,
            longitude: 77.5744679
        },
        status: "green"
    },
    {
        id: "ts-249081922",
        name: "Signal 62",
        location: {
            latitude: 12.9907397,
            longitude: 77.599624
        },
        status: "green"
    },
    {
        id: "ts-249082012",
        name: "Signal 63",
        location: {
            latitude: 12.989754,
            longitude: 77.5927032
        },
        status: "green"
    },
    {
        id: "ts-249082188",
        name: "Signal 64",
        location: {
            latitude: 12.9754941,
            longitude: 77.6145054
        },
        status: "green"
    },
    {
        id: "ts-249082234",
        name: "Signal 65",
        location: {
            latitude: 12.9809819,
            longitude: 77.6099607
        },
        status: "green"
    },
    {
        id: "ts-249083107",
        name: "Signal 66",
        location: {
            latitude: 12.992623,
            longitude: 77.6097923
        },
        status: "green"
    },
    {
        id: "ts-249083111",
        name: "Signal 67",
        location: {
            latitude: 12.9936479,
            longitude: 77.6072115
        },
        status: "green"
    },
    {
        id: "ts-249083677",
        name: "Signal 68",
        location: {
            latitude: 12.9595492,
            longitude: 77.5559464
        },
        status: "green"
    },
    {
        id: "ts-249084138",
        name: "Signal 69",
        location: {
            latitude: 12.950334,
            longitude: 77.5376362
        },
        status: "red"
    },
    {
        id: "ts-249084423",
        name: "Signal 70",
        location: {
            latitude: 12.9577314,
            longitude: 77.5341001
        },
        status: "green"
    },
    {
        id: "ts-249084426",
        name: "Signal 71",
        location: {
            latitude: 12.9599483,
            longitude: 77.5331539
        },
        status: "red"
    },
    {
        id: "ts-249084472",
        name: "Signal 72",
        location: {
            latitude: 12.9661078,
            longitude: 77.5355823
        },
        status: "yellow"
    },
    {
        id: "ts-249084482",
        name: "Signal 73",
        location: {
            latitude: 12.9741233,
            longitude: 77.5447325
        },
        status: "yellow"
    },
    {
        id: "ts-249084487",
        name: "Signal 74",
        location: {
            latitude: 12.9752543,
            longitude: 77.548233
        },
        status: "red"
    },
    {
        id: "ts-249086392",
        name: "Signal 75",
        location: {
            latitude: 12.9613737,
            longitude: 77.5592663
        },
        status: "green"
    },
    {
        id: "ts-249086438",
        name: "Royan Circle",
        location: {
            latitude: 12.9605005,
            longitude: 77.5685496
        },
        status: "red"
    },
    {
        id: "ts-249087719",
        name: "Signal 77",
        location: {
            latitude: 12.9563509,
            longitude: 77.5772014
        },
        status: "green"
    },
    {
        id: "ts-249087936",
        name: "Signal 78",
        location: {
            latitude: 12.9657245,
            longitude: 77.5865182
        },
        status: "green"
    },
    {
        id: "ts-249087971",
        name: "Mysore Bank Circle",
        location: {
            latitude: 12.9729254,
            longitude: 77.5810224
        },
        status: "yellow"
    },
    {
        id: "ts-249098535",
        name: "Signal 80",
        location: {
            latitude: 12.955483,
            longitude: 77.5919637
        },
        status: "yellow"
    },
    {
        id: "ts-249585502",
        name: "Signal 81",
        location: {
            latitude: 12.9610125,
            longitude: 77.5591727
        },
        status: "red"
    },
    {
        id: "ts-249589809",
        name: "Signal 82",
        location: {
            latitude: 12.956011,
            longitude: 77.5463943
        },
        status: "yellow"
    },
    {
        id: "ts-249775286",
        name: "Signal 83",
        location: {
            latitude: 12.9397582,
            longitude: 77.5739629
        },
        status: "red"
    },
    {
        id: "ts-249788404",
        name: "Signal 84",
        location: {
            latitude: 12.9407831,
            longitude: 77.5738077
        },
        status: "yellow"
    },
    {
        id: "ts-251082959",
        name: "Signal 85",
        location: {
            latitude: 12.9814997,
            longitude: 77.631196
        },
        status: "yellow"
    },
    {
        id: "ts-251082964",
        name: "Signal 86",
        location: {
            latitude: 12.9869588,
            longitude: 77.6478913
        },
        status: "yellow"
    },
    {
        id: "ts-251105190",
        name: "Signal 87",
        location: {
            latitude: 12.9836256,
            longitude: 77.7523529
        },
        status: "red"
    },
    {
        id: "ts-251145689",
        name: "Signal 88",
        location: {
            latitude: 12.9840247,
            longitude: 77.6402869
        },
        status: "green"
    },
    {
        id: "ts-251146209",
        name: "Signal 89",
        location: {
            latitude: 12.9666398,
            longitude: 77.6203284
        },
        status: "green"
    },
    {
        id: "ts-251361750",
        name: "Signal 90",
        location: {
            latitude: 12.9932818,
            longitude: 77.571493
        },
        status: "yellow"
    },
    {
        id: "ts-251361754",
        name: "Signal 91",
        location: {
            latitude: 13.0084297,
            longitude: 77.5711436
        },
        status: "green"
    },
    {
        id: "ts-251361762",
        name: "Signal 92",
        location: {
            latitude: 13.0170551,
            longitude: 77.5605477
        },
        status: "green"
    },
    {
        id: "ts-253179978",
        name: "Signal 93",
        location: {
            latitude: 12.9857661,
            longitude: 77.6449358
        },
        status: "red"
    },
    {
        id: "ts-253179984",
        name: "Signal 94",
        location: {
            latitude: 12.9784796,
            longitude: 77.6465988
        },
        status: "red"
    },
    {
        id: "ts-253179993",
        name: "Signal 95",
        location: {
            latitude: 12.9688448,
            longitude: 77.6476289
        },
        status: "green"
    },
    {
        id: "ts-253518979",
        name: "Signal 96",
        location: {
            latitude: 12.9670177,
            longitude: 77.6615244
        },
        status: "green"
    },
    {
        id: "ts-253521393",
        name: "Signal 97",
        location: {
            latitude: 12.9783441,
            longitude: 77.6410411
        },
        status: "red"
    },
    {
        id: "ts-253521398",
        name: "Signal 98",
        location: {
            latitude: 12.9781423,
            longitude: 77.6366403
        },
        status: "green"
    },
    {
        id: "ts-253521405",
        name: "Signal 99",
        location: {
            latitude: 12.9783815,
            longitude: 77.6286205
        },
        status: "green"
    },
    {
        id: "ts-254665635",
        name: "Signal 100",
        location: {
            latitude: 12.9860822,
            longitude: 77.5894728
        },
        status: "green"
    },
    {
        id: "ts-254665681",
        name: "Signal 101",
        location: {
            latitude: 12.9807434,
            longitude: 77.6029061
        },
        status: "green"
    },
    {
        id: "ts-254665683",
        name: "Signal 102",
        location: {
            latitude: 12.9804068,
            longitude: 77.6038622
        },
        status: "green"
    },
    {
        id: "ts-255558038",
        name: "Thippasandra Cross",
        location: {
            latitude: 12.9730613,
            longitude: 77.6469104
        },
        status: "red"
    },
    {
        id: "ts-260729391",
        name: "Sony World Signal",
        location: {
            latitude: 12.9373044,
            longitude: 77.6270752
        },
        status: "red"
    },
    {
        id: "ts-260908338",
        name: "Signal 105",
        location: {
            latitude: 12.9110072,
            longitude: 77.6837895
        },
        status: "yellow"
    },
    {
        id: "ts-263155275",
        name: "Signal 106",
        location: {
            latitude: 12.9684482,
            longitude: 77.6061032
        },
        status: "green"
    },
    {
        id: "ts-264191074",
        name: "Signal 107",
        location: {
            latitude: 12.8697535,
            longitude: 77.6533581
        },
        status: "green"
    },
    {
        id: "ts-266865270",
        name: "Signal 108",
        location: {
            latitude: 12.8890463,
            longitude: 77.6398958
        },
        status: "yellow"
    },
    {
        id: "ts-278163345",
        name: "Signal 109",
        location: {
            latitude: 13.0817755,
            longitude: 77.5931229
        },
        status: "green"
    },
    {
        id: "ts-278163350",
        name: "Signal 110",
        location: {
            latitude: 13.0822706,
            longitude: 77.5931329
        },
        status: "red"
    },
    {
        id: "ts-286679410",
        name: "Signal 111",
        location: {
            latitude: 12.9668549,
            longitude: 77.5875354
        },
        status: "green"
    },
    {
        id: "ts-286679427",
        name: "Signal 112",
        location: {
            latitude: 12.9668279,
            longitude: 77.5875646
        },
        status: "red"
    },
    {
        id: "ts-286679458",
        name: "Signal 113",
        location: {
            latitude: 12.9677579,
            longitude: 77.5874378
        },
        status: "red"
    },
    {
        id: "ts-286681113",
        name: "Signal 114",
        location: {
            latitude: 12.9785476,
            longitude: 77.5425316
        },
        status: "green"
    },
    {
        id: "ts-286681888",
        name: "Signal 115",
        location: {
            latitude: 12.9810486,
            longitude: 77.5746382
        },
        status: "red"
    },
    {
        id: "ts-286965860",
        name: "Signal 116",
        location: {
            latitude: 12.9778871,
            longitude: 77.5909529
        },
        status: "red"
    },
    {
        id: "ts-287793968",
        name: "Signal 117",
        location: {
            latitude: 12.9681517,
            longitude: 77.5873435
        },
        status: "green"
    },
    {
        id: "ts-287793997",
        name: "Signal 118",
        location: {
            latitude: 12.9634181,
            longitude: 77.5891393
        },
        status: "red"
    },
    {
        id: "ts-287905080",
        name: "Safina Plaza Junction",
        location: {
            latitude: 12.9792685,
            longitude: 77.6070952
        },
        status: "green"
    },
    {
        id: "ts-287911099",
        name: "Signal 120",
        location: {
            latitude: 12.9715933,
            longitude: 77.6359347
        },
        status: "green"
    },
    {
        id: "ts-287911537",
        name: "Signal 121",
        location: {
            latitude: 12.9751043,
            longitude: 77.6252162
        },
        status: "red"
    },
    {
        id: "ts-287912509",
        name: "Signal 122",
        location: {
            latitude: 12.9703619,
            longitude: 77.6413242
        },
        status: "red"
    },
    {
        id: "ts-294076280",
        name: "Signal 123",
        location: {
            latitude: 12.9903012,
            longitude: 77.5886396
        },
        status: "red"
    },
    {
        id: "ts-294081382",
        name: "Signal 124",
        location: {
            latitude: 12.9828071,
            longitude: 77.5969513
        },
        status: "red"
    },
    {
        id: "ts-294082867",
        name: "Signal 125",
        location: {
            latitude: 12.985094,
            longitude: 77.5722241
        },
        status: "green"
    },
    {
        id: "ts-294083347",
        name: "Signal 126",
        location: {
            latitude: 12.9754468,
            longitude: 77.5747547
        },
        status: "red"
    },
    {
        id: "ts-294083513",
        name: "Signal 127",
        location: {
            latitude: 12.9752011,
            longitude: 77.5763387
        },
        status: "red"
    },
    {
        id: "ts-294083863",
        name: "Signal 128",
        location: {
            latitude: 12.9878262,
            longitude: 77.5742634
        },
        status: "green"
    },
    {
        id: "ts-294084044",
        name: "Signal 129",
        location: {
            latitude: 12.9890267,
            longitude: 77.5739571
        },
        status: "green"
    },
    {
        id: "ts-295735336",
        name: "Signal 130",
        location: {
            latitude: 13.0087663,
            longitude: 77.5691563
        },
        status: "red"
    },
    {
        id: "ts-295735338",
        name: "Signal 131",
        location: {
            latitude: 13.0055874,
            longitude: 77.5692348
        },
        status: "red"
    },
    {
        id: "ts-295735342",
        name: "Signal 132",
        location: {
            latitude: 12.9968667,
            longitude: 77.569294
        },
        status: "red"
    },
    {
        id: "ts-295735476",
        name: "Signal 133",
        location: {
            latitude: 13.0146245,
            longitude: 77.572887
        },
        status: "green"
    },
    {
        id: "ts-296029992",
        name: "Signal 134",
        location: {
            latitude: 13.0039898,
            longitude: 77.6195774
        },
        status: "yellow"
    },
    {
        id: "ts-298830710",
        name: "Signal 135",
        location: {
            latitude: 12.9657377,
            longitude: 77.6252023
        },
        status: "red"
    },
    {
        id: "ts-298830828",
        name: "Signal 136",
        location: {
            latitude: 12.9667429,
            longitude: 77.6206838
        },
        status: "green"
    },
    {
        id: "ts-298831052",
        name: "Signal 137",
        location: {
            latitude: 12.9552045,
            longitude: 77.6894444
        },
        status: "green"
    },
    {
        id: "ts-301350890",
        name: "Signal 138",
        location: {
            latitude: 12.9405075,
            longitude: 77.6202253
        },
        status: "green"
    },
    {
        id: "ts-303926963",
        name: "Gurappana Palya Junction",
        location: {
            latitude: 12.9205798,
            longitude: 77.6001864
        },
        status: "green"
    },
    {
        id: "ts-303975904",
        name: "Signal 140",
        location: {
            latitude: 12.9483195,
            longitude: 77.576775
        },
        status: "green"
    },
    {
        id: "ts-304277418",
        name: "Signal 141",
        location: {
            latitude: 12.9274056,
            longitude: 77.6208361
        },
        status: "red"
    },
    {
        id: "ts-304771894",
        name: "Signal 142",
        location: {
            latitude: 12.9314922,
            longitude: 77.6226225
        },
        status: "red"
    },
    {
        id: "ts-305154536",
        name: "Signal 143",
        location: {
            latitude: 12.910244,
            longitude: 77.5952994
        },
        status: "green"
    },
    {
        id: "ts-306074373",
        name: "Signal 144",
        location: {
            latitude: 12.9609211,
            longitude: 77.638811
        },
        status: "green"
    },
    {
        id: "ts-306586928",
        name: "Signal 145",
        location: {
            latitude: 12.9345385,
            longitude: 77.6123203
        },
        status: "red"
    },
    {
        id: "ts-306594280",
        name: "Signal 146",
        location: {
            latitude: 12.9172507,
            longitude: 77.6224563
        },
        status: "red"
    },
    {
        id: "ts-306601671",
        name: "Signal 147",
        location: {
            latitude: 12.9372946,
            longitude: 77.6018928
        },
        status: "green"
    },
    {
        id: "ts-306601726",
        name: "Signal 148",
        location: {
            latitude: 12.9372664,
            longitude: 77.6014978
        },
        status: "red"
    },
    {
        id: "ts-306601731",
        name: "Signal 149",
        location: {
            latitude: 12.9369854,
            longitude: 77.6019814
        },
        status: "green"
    },
    {
        id: "ts-306834748",
        name: "Signal 150",
        location: {
            latitude: 12.9664257,
            longitude: 77.6142217
        },
        status: "red"
    },
    {
        id: "ts-306854061",
        name: "Signal 151",
        location: {
            latitude: 12.913937,
            longitude: 77.6101015
        },
        status: "red"
    },
    {
        id: "ts-307404566",
        name: "Signal 152",
        location: {
            latitude: 12.9237827,
            longitude: 77.6398975
        },
        status: "red"
    },
    {
        id: "ts-308063197",
        name: "Signal 153",
        location: {
            latitude: 12.9845161,
            longitude: 77.5718021
        },
        status: "green"
    },
    {
        id: "ts-308063843",
        name: "Signal 154",
        location: {
            latitude: 12.9571579,
            longitude: 77.5284137
        },
        status: "red"
    },
    {
        id: "ts-308064375",
        name: "Signal 155",
        location: {
            latitude: 12.9521149,
            longitude: 77.4998105
        },
        status: "green"
    },
    {
        id: "ts-308069216",
        name: "Signal 156",
        location: {
            latitude: 12.9808805,
            longitude: 77.5365605
        },
        status: "green"
    },
    {
        id: "ts-308072410",
        name: "Signal 157",
        location: {
            latitude: 13.0258594,
            longitude: 77.5207425
        },
        status: "green"
    },
    {
        id: "ts-308072451",
        name: "Jalahalli Cross",
        location: {
            latitude: 13.0398882,
            longitude: 77.5183596
        },
        status: "red"
    },
    {
        id: "ts-308074193",
        name: "Signal 159",
        location: {
            latitude: 13.028726,
            longitude: 77.540158
        },
        status: "red"
    },
    {
        id: "ts-308081022",
        name: "Signal 160",
        location: {
            latitude: 13.0471228,
            longitude: 77.5699836
        },
        status: "red"
    },
    {
        id: "ts-308184600",
        name: "Signal 161",
        location: {
            latitude: 12.9880732,
            longitude: 77.5122824
        },
        status: "red"
    },
    {
        id: "ts-308188550",
        name: "Signal 162",
        location: {
            latitude: 13.0059429,
            longitude: 77.5486862
        },
        status: "red"
    },
    {
        id: "ts-308188640",
        name: "Signal 163",
        location: {
            latitude: 13.0061167,
            longitude: 77.5486474
        },
        status: "green"
    },
    {
        id: "ts-308218810",
        name: "Signal 164",
        location: {
            latitude: 13.052715,
            longitude: 77.6460252
        },
        status: "red"
    },
    {
        id: "ts-308231592",
        name: "Nanjappa Circle",
        location: {
            latitude: 13.0683999,
            longitude: 77.5603713
        },
        status: "green"
    },
    {
        id: "ts-308231734",
        name: "Signal 166",
        location: {
            latitude: 13.0348022,
            longitude: 77.5573491
        },
        status: "green"
    },
    {
        id: "ts-308231837",
        name: "Signal 167",
        location: {
            latitude: 13.049637,
            longitude: 77.5537592
        },
        status: "green"
    },
    {
        id: "ts-308232359",
        name: "Signal 168",
        location: {
            latitude: 13.0076813,
            longitude: 77.5488161
        },
        status: "green"
    },
    {
        id: "ts-308232366",
        name: "Signal 169",
        location: {
            latitude: 13.0040722,
            longitude: 77.5491659
        },
        status: "red"
    },
    {
        id: "ts-308232380",
        name: "Signal 170",
        location: {
            latitude: 12.9876865,
            longitude: 77.5500735
        },
        status: "yellow"
    },
    {
        id: "ts-308232384",
        name: "National Public School Circle",
        location: {
            latitude: 12.9844607,
            longitude: 77.5491829
        },
        status: "red"
    },
    {
        id: "ts-308232637",
        name: "Signal 172",
        location: {
            latitude: 12.9600676,
            longitude: 77.5328908
        },
        status: "red"
    },
    {
        id: "ts-308232833",
        name: "Signal 173",
        location: {
            latitude: 12.9661048,
            longitude: 77.5353176
        },
        status: "red"
    },
    {
        id: "ts-308232847",
        name: "Signal 174",
        location: {
            latitude: 12.9742803,
            longitude: 77.5447396
        },
        status: "yellow"
    },
    {
        id: "ts-308232862",
        name: "National Public School Circle",
        location: {
            latitude: 12.9842583,
            longitude: 77.5489013
        },
        status: "yellow"
    },
    {
        id: "ts-308232865",
        name: "Signal 176",
        location: {
            latitude: 12.9879677,
            longitude: 77.5497657
        },
        status: "green"
    },
    {
        id: "ts-308232877",
        name: "Signal 177",
        location: {
            latitude: 13.0037857,
            longitude: 77.5490712
        },
        status: "green"
    },
    {
        id: "ts-308232885",
        name: "Signal 178",
        location: {
            latitude: 13.0061811,
            longitude: 77.5488004
        },
        status: "green"
    },
    {
        id: "ts-308232886",
        name: "Signal 179",
        location: {
            latitude: 13.0060037,
            longitude: 77.5488442
        },
        status: "red"
    },
    {
        id: "ts-308232925",
        name: "Signal 180",
        location: {
            latitude: 13.0077186,
            longitude: 77.5485965
        },
        status: "green"
    },
    {
        id: "ts-308233404",
        name: "Signal 181",
        location: {
            latitude: 12.9576812,
            longitude: 77.5339714
        },
        status: "red"
    },
    {
        id: "ts-308238310",
        name: "Signal 182",
        location: {
            latitude: 13.0404899,
            longitude: 77.6244573
        },
        status: "green"
    },
    {
        id: "ts-308729117",
        name: "Signal 183",
        location: {
            latitude: 12.9231908,
            longitude: 77.5760986
        },
        status: "red"
    },
    {
        id: "ts-308729150",
        name: "Signal 184",
        location: {
            latitude: 12.9234807,
            longitude: 77.5763699
        },
        status: "red"
    },
    {
        id: "ts-308729151",
        name: "Signal 185",
        location: {
            latitude: 12.9234243,
            longitude: 77.5735584
        },
        status: "red"
    },
    {
        id: "ts-308807795",
        name: "Avarekalu Circle",
        location: {
            latitude: 12.9273387,
            longitude: 77.5769552
        },
        status: "red"
    },
    {
        id: "ts-308915752",
        name: "Signal 187",
        location: {
            latitude: 12.9258055,
            longitude: 77.6251691
        },
        status: "red"
    },
    {
        id: "ts-308923397",
        name: "Signal 188",
        location: {
            latitude: 12.943891,
            longitude: 77.6075973
        },
        status: "green"
    },
    {
        id: "ts-308923925",
        name: "Signal 189",
        location: {
            latitude: 12.9519523,
            longitude: 77.6051135
        },
        status: "yellow"
    },
    {
        id: "ts-308924882",
        name: "Signal 190",
        location: {
            latitude: 12.9666874,
            longitude: 77.6088877
        },
        status: "green"
    },
    {
        id: "ts-309592695",
        name: "Signal 191",
        location: {
            latitude: 12.9351903,
            longitude: 77.6244413
        },
        status: "red"
    },
    {
        id: "ts-309595499",
        name: "Signal 192",
        location: {
            latitude: 12.9102099,
            longitude: 77.5932544
        },
        status: "green"
    },
    {
        id: "ts-315208341",
        name: "Signal 193",
        location: {
            latitude: 12.9385736,
            longitude: 77.6325528
        },
        status: "green"
    },
    {
        id: "ts-315208342",
        name: "Signal 194",
        location: {
            latitude: 12.9384443,
            longitude: 77.6328936
        },
        status: "red"
    },
    {
        id: "ts-320647365",
        name: "KR Market",
        location: {
            latitude: 12.9642064,
            longitude: 77.5768931
        },
        status: "red"
    },
    {
        id: "ts-331665381",
        name: "Signal 196",
        location: {
            latitude: 13.1036366,
            longitude: 77.6002543
        },
        status: "green"
    },
    {
        id: "ts-332955178",
        name: "Signal 197",
        location: {
            latitude: 13.0818799,
            longitude: 77.593391
        },
        status: "green"
    },
    {
        id: "ts-334482516",
        name: "Signal 198",
        location: {
            latitude: 12.9750056,
            longitude: 77.6082104
        },
        status: "red"
    },
    {
        id: "ts-335663834",
        name: "Signal 199",
        location: {
            latitude: 13.0427065,
            longitude: 77.5906305
        },
        status: "green"
    },
    {
        id: "ts-343088229",
        name: "Shri T R A Thumba Chetty Circle",
        location: {
            latitude: 12.9918387,
            longitude: 77.614572
        },
        status: "green"
    },
    {
        id: "ts-343094471",
        name: "Signal 201",
        location: {
            latitude: 13.0019917,
            longitude: 77.6122611
        },
        status: "green"
    },
    {
        id: "ts-343320203",
        name: "Signal 202",
        location: {
            latitude: 12.9942926,
            longitude: 77.6635086
        },
        status: "green"
    },
    {
        id: "ts-343322076",
        name: "Signal 203",
        location: {
            latitude: 13.0133145,
            longitude: 77.6619872
        },
        status: "green"
    },
    {
        id: "ts-343322679",
        name: "Signal 204",
        location: {
            latitude: 13.000214,
            longitude: 77.6768064
        },
        status: "green"
    },
    {
        id: "ts-343459489",
        name: "Signal 205",
        location: {
            latitude: 13.0051531,
            longitude: 77.6850038
        },
        status: "green"
    },
    {
        id: "ts-343462692",
        name: "Signal 206",
        location: {
            latitude: 13.0135336,
            longitude: 77.6624212
        },
        status: "green"
    },
    {
        id: "ts-343594553",
        name: "Signal 207",
        location: {
            latitude: 12.9815657,
            longitude: 77.6054118
        },
        status: "green"
    },
    {
        id: "ts-343601638",
        name: "Signal 208",
        location: {
            latitude: 13.0398944,
            longitude: 77.6243107
        },
        status: "green"
    },
    {
        id: "ts-347295433",
        name: "Signal 209",
        location: {
            latitude: 12.9750703,
            longitude: 77.5764108
        },
        status: "green"
    },
    {
        id: "ts-347295554",
        name: "Signal 210",
        location: {
            latitude: 12.9746331,
            longitude: 77.5708033
        },
        status: "red"
    },
    {
        id: "ts-348036175",
        name: "Signal 211",
        location: {
            latitude: 12.9248465,
            longitude: 77.6342272
        },
        status: "red"
    },
    {
        id: "ts-353196735",
        name: "Signal 212",
        location: {
            latitude: 13.0152516,
            longitude: 77.6427526
        },
        status: "green"
    },
    {
        id: "ts-355427675",
        name: "Signal 213",
        location: {
            latitude: 12.9912525,
            longitude: 77.6573283
        },
        status: "red"
    },
    {
        id: "ts-355427677",
        name: "Signal 214",
        location: {
            latitude: 12.991134,
            longitude: 77.6568584
        },
        status: "yellow"
    },
    {
        id: "ts-355428774",
        name: "Signal 215",
        location: {
            latitude: 12.9791928,
            longitude: 77.6464567
        },
        status: "red"
    },
    {
        id: "ts-364626139",
        name: "Signal 216",
        location: {
            latitude: 12.917536,
            longitude: 77.5739762
        },
        status: "red"
    },
    {
        id: "ts-374217275",
        name: "Signal 217",
        location: {
            latitude: 13.034138,
            longitude: 77.5686006
        },
        status: "green"
    },
    {
        id: "ts-374217314",
        name: "Signal 218",
        location: {
            latitude: 13.0370077,
            longitude: 77.5659978
        },
        status: "red"
    },
    {
        id: "ts-388463959",
        name: "Signal 219",
        location: {
            latitude: 12.8739746,
            longitude: 77.5405639
        },
        status: "green"
    },
    {
        id: "ts-412135152",
        name: "Signal 220",
        location: {
            latitude: 12.9954,
            longitude: 77.602078
        },
        status: "yellow"
    },
    {
        id: "ts-416419153",
        name: "Signal 221",
        location: {
            latitude: 13.0092971,
            longitude: 77.6433987
        },
        status: "red"
    },
    {
        id: "ts-419638217",
        name: "Gorguntepalaya Cross",
        location: {
            latitude: 13.0290733,
            longitude: 77.53987
        },
        status: "green"
    },
    {
        id: "ts-419638282",
        name: "Signal 223",
        location: {
            latitude: 13.0285308,
            longitude: 77.5197034
        },
        status: "red"
    },
    {
        id: "ts-426823702",
        name: "Jalahalli Cross",
        location: {
            latitude: 13.0400737,
            longitude: 77.5184224
        },
        status: "red"
    },
    {
        id: "ts-426835306",
        name: "Signal 225",
        location: {
            latitude: 13.0171281,
            longitude: 77.5605923
        },
        status: "green"
    },
    {
        id: "ts-426962389",
        name: "Signal 226",
        location: {
            latitude: 12.9969354,
            longitude: 77.5730781
        },
        status: "green"
    },
    {
        id: "ts-427531037",
        name: "Signal 227",
        location: {
            latitude: 12.9919113,
            longitude: 77.575415
        },
        status: "red"
    },
    {
        id: "ts-427593076",
        name: "Signal 228",
        location: {
            latitude: 13.0036714,
            longitude: 77.5699962
        },
        status: "green"
    },
    {
        id: "ts-427593081",
        name: "Signal 229",
        location: {
            latitude: 12.9992144,
            longitude: 77.5713561
        },
        status: "red"
    },
    {
        id: "ts-427593098",
        name: "Signal 230",
        location: {
            latitude: 13.0056979,
            longitude: 77.5637883
        },
        status: "yellow"
    },
    {
        id: "ts-427593100",
        name: "Signal 231",
        location: {
            latitude: 13.0036936,
            longitude: 77.5653044
        },
        status: "green"
    },
    {
        id: "ts-427593103",
        name: "Signal 232",
        location: {
            latitude: 13.0056226,
            longitude: 77.5667143
        },
        status: "red"
    },
    {
        id: "ts-427593300",
        name: "Signal 233",
        location: {
            latitude: 13.0036878,
            longitude: 77.5667685
        },
        status: "red"
    },
    {
        id: "ts-427593301",
        name: "Signal 234",
        location: {
            latitude: 13.0055491,
            longitude: 77.5681646
        },
        status: "red"
    },
    {
        id: "ts-427593305",
        name: "Signal 235",
        location: {
            latitude: 13.0054364,
            longitude: 77.5712126
        },
        status: "red"
    },
    {
        id: "ts-427593398",
        name: "Signal 236",
        location: {
            latitude: 13.0036822,
            longitude: 77.5681969
        },
        status: "green"
    },
    {
        id: "ts-427594203",
        name: "Signal 237",
        location: {
            latitude: 13.0185033,
            longitude: 77.5579816
        },
        status: "red"
    },
    {
        id: "ts-428420881",
        name: "Signal 238",
        location: {
            latitude: 12.9718188,
            longitude: 77.5939029
        },
        status: "green"
    },
    {
        id: "ts-428435127",
        name: "Signal 239",
        location: {
            latitude: 12.9649679,
            longitude: 77.596607
        },
        status: "green"
    },
    {
        id: "ts-428457171",
        name: "Signal 240",
        location: {
            latitude: 12.9538291,
            longitude: 77.591425
        },
        status: "red"
    },
    {
        id: "ts-428457173",
        name: "Signal 241",
        location: {
            latitude: 12.9555639,
            longitude: 77.5922182
        },
        status: "green"
    },
    {
        id: "ts-428853824",
        name: "Signal 242",
        location: {
            latitude: 12.980667,
            longitude: 77.5768379
        },
        status: "green"
    },
    {
        id: "ts-428853845",
        name: "Signal 243",
        location: {
            latitude: 12.9797639,
            longitude: 77.5817457
        },
        status: "red"
    },
    {
        id: "ts-429001262",
        name: "Signal 244",
        location: {
            latitude: 12.9638856,
            longitude: 77.585035
        },
        status: "green"
    },
    {
        id: "ts-429001265",
        name: "Signal 245",
        location: {
            latitude: 12.9655022,
            longitude: 77.5866582
        },
        status: "red"
    },
    {
        id: "ts-429230963",
        name: "Signal 246",
        location: {
            latitude: 12.9669523,
            longitude: 77.5872021
        },
        status: "green"
    },
    {
        id: "ts-429286840",
        name: "Rajaji Nagar 6th Block Circle",
        location: {
            latitude: 12.9799046,
            longitude: 77.5537504
        },
        status: "green"
    },
    {
        id: "ts-429286843",
        name: "Signal 248",
        location: {
            latitude: 12.975251,
            longitude: 77.5486665
        },
        status: "red"
    },
    {
        id: "ts-429726436",
        name: "Signal 249",
        location: {
            latitude: 12.9747702,
            longitude: 77.570483
        },
        status: "red"
    },
    {
        id: "ts-429726441",
        name: "Signal 250",
        location: {
            latitude: 12.968816,
            longitude: 77.5680475
        },
        status: "red"
    },
    {
        id: "ts-429731194",
        name: "Signal 251",
        location: {
            latitude: 12.9530862,
            longitude: 77.573597
        },
        status: "green"
    },
    {
        id: "ts-430043662",
        name: "Signal 252",
        location: {
            latitude: 13.0101366,
            longitude: 77.5905814
        },
        status: "red"
    },
    {
        id: "ts-430127696",
        name: "Signal 253",
        location: {
            latitude: 13.0430481,
            longitude: 77.5900575
        },
        status: "red"
    },
    {
        id: "ts-431524344",
        name: "Signal 254",
        location: {
            latitude: 12.9817204,
            longitude: 77.6284718
        },
        status: "red"
    },
    {
        id: "ts-431530258",
        name: "Signal 255",
        location: {
            latitude: 13.0356131,
            longitude: 77.5536152
        },
        status: "green"
    },
    {
        id: "ts-432501724",
        name: "Signal 256",
        location: {
            latitude: 12.984114,
            longitude: 77.6407843
        },
        status: "green"
    },
    {
        id: "ts-432501735",
        name: "Signal 257",
        location: {
            latitude: 12.9867223,
            longitude: 77.6479887
        },
        status: "green"
    },
    {
        id: "ts-433833664",
        name: "Signal 258",
        location: {
            latitude: 13.0666836,
            longitude: 77.5032893
        },
        status: "green"
    },
    {
        id: "ts-442107151",
        name: "Signal 259",
        location: {
            latitude: 12.9970202,
            longitude: 77.6700327
        },
        status: "yellow"
    },
    {
        id: "ts-442107189",
        name: "Signal 260",
        location: {
            latitude: 13.0050449,
            longitude: 77.6850796
        },
        status: "green"
    },
    {
        id: "ts-442438288",
        name: "Signal 261",
        location: {
            latitude: 13.0199989,
            longitude: 77.6744956
        },
        status: "yellow"
    },
    {
        id: "ts-443224605",
        name: "Signal 262",
        location: {
            latitude: 12.9352411,
            longitude: 77.6243708
        },
        status: "green"
    },
    {
        id: "ts-446782731",
        name: "Signal 263",
        location: {
            latitude: 13.019036,
            longitude: 77.5397483
        },
        status: "green"
    },
    {
        id: "ts-446860580",
        name: "Signal 264",
        location: {
            latitude: 12.988087,
            longitude: 77.5375652
        },
        status: "green"
    },
    {
        id: "ts-446860594",
        name: "Signal 265",
        location: {
            latitude: 12.9875488,
            longitude: 77.5542881
        },
        status: "red"
    },
    {
        id: "ts-446860595",
        name: "Signal 266",
        location: {
            latitude: 12.9899503,
            longitude: 77.5544114
        },
        status: "red"
    },
    {
        id: "ts-446860602",
        name: "Signal 267",
        location: {
            latitude: 13.0044156,
            longitude: 77.5536625
        },
        status: "green"
    },
    {
        id: "ts-447113035",
        name: "Signal 268",
        location: {
            latitude: 12.9687622,
            longitude: 77.5367476
        },
        status: "green"
    },
    {
        id: "ts-447113036",
        name: "Signal 269",
        location: {
            latitude: 12.9688104,
            longitude: 77.5365875
        },
        status: "green"
    },
    {
        id: "ts-447114405",
        name: "Signal 270",
        location: {
            latitude: 12.9708147,
            longitude: 77.5249854
        },
        status: "green"
    },
    {
        id: "ts-448116638",
        name: "Signal 271",
        location: {
            latitude: 12.9901695,
            longitude: 77.5507964
        },
        status: "green"
    },
    {
        id: "ts-448116639",
        name: "Signal 272",
        location: {
            latitude: 12.9900699,
            longitude: 77.5505078
        },
        status: "red"
    },
    {
        id: "ts-465232495",
        name: "Signal 273",
        location: {
            latitude: 13.0015048,
            longitude: 77.5945171
        },
        status: "red"
    },
    {
        id: "ts-481750173",
        name: "Signal 274",
        location: {
            latitude: 12.9899972,
            longitude: 77.6547867
        },
        status: "green"
    },
    {
        id: "ts-483412094",
        name: "Signal 275",
        location: {
            latitude: 13.0250957,
            longitude: 77.5111135
        },
        status: "green"
    },
    {
        id: "ts-483412558",
        name: "Signal 276",
        location: {
            latitude: 13.0164967,
            longitude: 77.5056432
        },
        status: "green"
    },
    {
        id: "ts-493493706",
        name: "Signal 277",
        location: {
            latitude: 12.9481732,
            longitude: 77.5741139
        },
        status: "red"
    },
    {
        id: "ts-494238032",
        name: "Gurappana Palya Junction",
        location: {
            latitude: 12.9205791,
            longitude: 77.6001168
        },
        status: "red"
    },
    {
        id: "ts-494238035",
        name: "Signal 279",
        location: {
            latitude: 12.9284062,
            longitude: 77.6004986
        },
        status: "green"
    },
    {
        id: "ts-494238044",
        name: "Signal 280",
        location: {
            latitude: 12.9072862,
            longitude: 77.6003264
        },
        status: "red"
    },
    {
        id: "ts-494271080",
        name: "Signal 281",
        location: {
            latitude: 12.9173081,
            longitude: 77.6231104
        },
        status: "red"
    },
    {
        id: "ts-494271099",
        name: "Signal 282",
        location: {
            latitude: 12.9164652,
            longitude: 77.6151308
        },
        status: "red"
    },
    {
        id: "ts-494271106",
        name: "Signal 283",
        location: {
            latitude: 12.9211388,
            longitude: 77.6204844
        },
        status: "green"
    },
    {
        id: "ts-503050615",
        name: "Signal 284",
        location: {
            latitude: 12.9274069,
            longitude: 77.6211127
        },
        status: "green"
    },
    {
        id: "ts-503180914",
        name: "Signal 285",
        location: {
            latitude: 12.9264741,
            longitude: 77.5611722
        },
        status: "green"
    },
    {
        id: "ts-512072644",
        name: "Signal 286",
        location: {
            latitude: 13.1220704,
            longitude: 77.6305434
        },
        status: "red"
    },
    {
        id: "ts-512072658",
        name: "Signal 287",
        location: {
            latitude: 13.1222083,
            longitude: 77.6307811
        },
        status: "red"
    },
    {
        id: "ts-514452399",
        name: "Signal 288",
        location: {
            latitude: 12.9452272,
            longitude: 77.5282455
        },
        status: "red"
    },
    {
        id: "ts-560642468",
        name: "Rajarajeshwarinagara Gate",
        location: {
            latitude: 12.9364154,
            longitude: 77.518236
        },
        status: "green"
    },
    {
        id: "ts-560654632",
        name: "Signal 290",
        location: {
            latitude: 12.8927588,
            longitude: 77.5989711
        },
        status: "green"
    },
    {
        id: "ts-570758310",
        name: "Briand Square",
        location: {
            latitude: 12.9642875,
            longitude: 77.5699161
        },
        status: "red"
    },
    {
        id: "ts-571438265",
        name: "Signal 292",
        location: {
            latitude: 13.0424606,
            longitude: 77.5146845
        },
        status: "green"
    },
    {
        id: "ts-574367083",
        name: "Signal 293",
        location: {
            latitude: 13.0734435,
            longitude: 77.5929851
        },
        status: "red"
    },
    {
        id: "ts-574543671",
        name: "Signal 294",
        location: {
            latitude: 13.0110014,
            longitude: 77.5069451
        },
        status: "green"
    },
    {
        id: "ts-582575956",
        name: "Signal 295",
        location: {
            latitude: 13.0207682,
            longitude: 77.5924649
        },
        status: "red"
    },
    {
        id: "ts-599226700",
        name: "Signal 296",
        location: {
            latitude: 13.030284,
            longitude: 77.621044
        },
        status: "green"
    },
    {
        id: "ts-618251411",
        name: "Signal 297",
        location: {
            latitude: 12.8892466,
            longitude: 77.6399474
        },
        status: "red"
    },
    {
        id: "ts-618252032",
        name: "Signal 298",
        location: {
            latitude: 12.9069175,
            longitude: 77.6288825
        },
        status: "green"
    },
    {
        id: "ts-650141249",
        name: "Signal 299",
        location: {
            latitude: 12.9164748,
            longitude: 77.632431
        },
        status: "yellow"
    },
    {
        id: "ts-650141450",
        name: "Signal 300",
        location: {
            latitude: 12.9219722,
            longitude: 77.6447993
        },
        status: "red"
    },
    {
        id: "ts-650141554",
        name: "Signal 301",
        location: {
            latitude: 12.9165984,
            longitude: 77.6322048
        },
        status: "green"
    },
    {
        id: "ts-663313890",
        name: "Signal 302",
        location: {
            latitude: 12.9676142,
            longitude: 77.5886919
        },
        status: "green"
    },
    {
        id: "ts-663313897",
        name: "Signal 303",
        location: {
            latitude: 12.9680525,
            longitude: 77.589125
        },
        status: "red"
    },
    {
        id: "ts-679993212",
        name: "Signal 304",
        location: {
            latitude: 12.9749701,
            longitude: 77.5707694
        },
        status: "red"
    },
    {
        id: "ts-699576768",
        name: "Signal 305",
        location: {
            latitude: 12.9168857,
            longitude: 77.5735015
        },
        status: "green"
    },
    {
        id: "ts-699576776",
        name: "Signal 306",
        location: {
            latitude: 12.9065768,
            longitude: 77.5730753
        },
        status: "red"
    },
    {
        id: "ts-699576791",
        name: "Signal 307",
        location: {
            latitude: 12.9175324,
            longitude: 77.5736007
        },
        status: "red"
    },
    {
        id: "ts-699576794",
        name: "Signal 308",
        location: {
            latitude: 12.9178186,
            longitude: 77.5734427
        },
        status: "red"
    },
    {
        id: "ts-699576806",
        name: "Signal 309",
        location: {
            latitude: 12.9066385,
            longitude: 77.5733265
        },
        status: "green"
    },
    {
        id: "ts-699585158",
        name: "Signal 310",
        location: {
            latitude: 12.9071971,
            longitude: 77.6006303
        },
        status: "green"
    },
    {
        id: "ts-699684258",
        name: "Signal 311",
        location: {
            latitude: 12.9255408,
            longitude: 77.5500917
        },
        status: "green"
    },
    {
        id: "ts-699684299",
        name: "Signal 312",
        location: {
            latitude: 12.9384949,
            longitude: 77.5335195
        },
        status: "green"
    },
    {
        id: "ts-699686049",
        name: "Signal 313",
        location: {
            latitude: 12.9596673,
            longitude: 77.5557221
        },
        status: "red"
    },
    {
        id: "ts-699704164",
        name: "Signal 314",
        location: {
            latitude: 12.9363756,
            longitude: 77.5187438
        },
        status: "green"
    },
    {
        id: "ts-699704182",
        name: "Signal 315",
        location: {
            latitude: 12.9363084,
            longitude: 77.5182544
        },
        status: "green"
    },
    {
        id: "ts-699704288",
        name: "Signal 316",
        location: {
            latitude: 12.9127956,
            longitude: 77.485376
        },
        status: "red"
    },
    {
        id: "ts-701736119",
        name: "Jalahalli Cross",
        location: {
            latitude: 13.0400432,
            longitude: 77.5184589
        },
        status: "green"
    },
    {
        id: "ts-736014437",
        name: "Sony Centre Signal",
        location: {
            latitude: 12.9701319,
            longitude: 77.6412438
        },
        status: "red"
    },
    {
        id: "ts-736207271",
        name: "Signal 319",
        location: {
            latitude: 12.98377,
            longitude: 77.6405417
        },
        status: "green"
    },
    {
        id: "ts-736207419",
        name: "Signal 320",
        location: {
            latitude: 12.978223,
            longitude: 77.6408226
        },
        status: "red"
    },
    {
        id: "ts-774662327",
        name: "Signal 321",
        location: {
            latitude: 13.0379678,
            longitude: 77.5223197
        },
        status: "red"
    },
    {
        id: "ts-858946512",
        name: "SRS",
        location: {
            latitude: 13.0347707,
            longitude: 77.5297388
        },
        status: "red"
    },
    {
        id: "ts-954175916",
        name: "Signal 323",
        location: {
            latitude: 12.9921334,
            longitude: 77.7155841
        },
        status: "green"
    },
    {
        id: "ts-954914704",
        name: "Signal 324",
        location: {
            latitude: 12.8794862,
            longitude: 77.5455211
        },
        status: "red"
    },
    {
        id: "ts-966863997",
        name: "Signal 325",
        location: {
            latitude: 13.0268814,
            longitude: 77.5798849
        },
        status: "red"
    },
    {
        id: "ts-1054665120",
        name: "Signal 326",
        location: {
            latitude: 13.0425321,
            longitude: 77.5147035
        },
        status: "red"
    },
    {
        id: "ts-1054687502",
        name: "Nagarabhavi Circle",
        location: {
            latitude: 12.9607539,
            longitude: 77.5127801
        },
        status: "green"
    },
    {
        id: "ts-1054687612",
        name: "Signal 328",
        location: {
            latitude: 12.9579142,
            longitude: 77.5188872
        },
        status: "green"
    },
    {
        id: "ts-1067769827",
        name: "Signal 329",
        location: {
            latitude: 12.9604237,
            longitude: 77.6012676
        },
        status: "green"
    },
    {
        id: "ts-1067781019",
        name: "Signal 330",
        location: {
            latitude: 12.9648288,
            longitude: 77.5972953
        },
        status: "red"
    },
    {
        id: "ts-1067789523",
        name: "Signal 331",
        location: {
            latitude: 12.9621229,
            longitude: 77.5944602
        },
        status: "red"
    },
    {
        id: "ts-1070314190",
        name: "Signal 332",
        location: {
            latitude: 12.916787,
            longitude: 77.5736481
        },
        status: "green"
    },
    {
        id: "ts-1070314225",
        name: "Signal 333",
        location: {
            latitude: 12.9169852,
            longitude: 77.5734927
        },
        status: "green"
    },
    {
        id: "ts-1070361732",
        name: "Signal 334",
        location: {
            latitude: 12.9319553,
            longitude: 77.613411
        },
        status: "red"
    },
    {
        id: "ts-1070361796",
        name: "Signal 335",
        location: {
            latitude: 12.9277245,
            longitude: 77.6208562
        },
        status: "green"
    },
    {
        id: "ts-1070361799",
        name: "Signal 336",
        location: {
            latitude: 12.9246425,
            longitude: 77.6183237
        },
        status: "red"
    },
    {
        id: "ts-1083470977",
        name: "Signal 337",
        location: {
            latitude: 12.9208738,
            longitude: 77.6652688
        },
        status: "green"
    },
    {
        id: "ts-1087824452",
        name: "Signal 338",
        location: {
            latitude: 12.9727661,
            longitude: 77.5816763
        },
        status: "green"
    },
    {
        id: "ts-1104241030",
        name: "Signal 339",
        location: {
            latitude: 12.9839487,
            longitude: 77.7525664
        },
        status: "yellow"
    },
    {
        id: "ts-1104243944",
        name: "Signal 340",
        location: {
            latitude: 12.983849,
            longitude: 77.7523143
        },
        status: "yellow"
    },
    {
        id: "ts-1109138335",
        name: "Signal 341",
        location: {
            latitude: 12.9976301,
            longitude: 77.5505308
        },
        status: "red"
    },
    {
        id: "ts-1109138343",
        name: "Signal 342",
        location: {
            latitude: 12.9974797,
            longitude: 77.5501793
        },
        status: "red"
    },
    {
        id: "ts-1111557424",
        name: "Signal 343",
        location: {
            latitude: 12.9828585,
            longitude: 77.5603304
        },
        status: "red"
    },
    {
        id: "ts-1111583828",
        name: "Signal 344",
        location: {
            latitude: 12.9843364,
            longitude: 77.5543687
        },
        status: "red"
    },
    {
        id: "ts-1145362952",
        name: "Signal 345",
        location: {
            latitude: 12.9070942,
            longitude: 77.4991442
        },
        status: "green"
    },
    {
        id: "ts-1148895344",
        name: "Signal 346",
        location: {
            latitude: 12.9169237,
            longitude: 77.5896425
        },
        status: "green"
    },
    {
        id: "ts-1212302913",
        name: "Signal 347",
        location: {
            latitude: 12.9782143,
            longitude: 77.6368516
        },
        status: "green"
    },
    {
        id: "ts-1213632636",
        name: "Signal 348",
        location: {
            latitude: 12.9825502,
            longitude: 77.634728
        },
        status: "green"
    },
    {
        id: "ts-1232686144",
        name: "Signal 349",
        location: {
            latitude: 12.9765226,
            longitude: 77.5989941
        },
        status: "green"
    },
    {
        id: "ts-1259491784",
        name: "Signal 350",
        location: {
            latitude: 12.9721697,
            longitude: 77.7117412
        },
        status: "green"
    },
    {
        id: "ts-1282881326",
        name: "Signal 351",
        location: {
            latitude: 12.9717707,
            longitude: 77.635978
        },
        status: "red"
    },
    {
        id: "ts-1285913198",
        name: "Sumanahalli Junction",
        location: {
            latitude: 12.9875021,
            longitude: 77.5191615
        },
        status: "red"
    },
    {
        id: "ts-1285970581",
        name: "Signal 353",
        location: {
            latitude: 12.9610477,
            longitude: 77.5129035
        },
        status: "red"
    },
    {
        id: "ts-1285970595",
        name: "Signal 354",
        location: {
            latitude: 12.9247495,
            longitude: 77.4852963
        },
        status: "red"
    },
    {
        id: "ts-1290058657",
        name: "Signal 355",
        location: {
            latitude: 12.9955206,
            longitude: 77.6017655
        },
        status: "red"
    },
    {
        id: "ts-1331989759",
        name: "Signal 356",
        location: {
            latitude: 12.9064115,
            longitude: 77.5784876
        },
        status: "green"
    },
    {
        id: "ts-1347565273",
        name: "Signal 357",
        location: {
            latitude: 12.9824368,
            longitude: 77.7583489
        },
        status: "green"
    },
    {
        id: "ts-1368829017",
        name: "Signal 358",
        location: {
            latitude: 12.9837283,
            longitude: 77.7527373
        },
        status: "red"
    },
    {
        id: "ts-1404460897",
        name: "Signal 359",
        location: {
            latitude: 12.9782903,
            longitude: 77.6366011
        },
        status: "red"
    },
    {
        id: "ts-1404460899",
        name: "Signal 360",
        location: {
            latitude: 12.9783626,
            longitude: 77.6367655
        },
        status: "red"
    },
    {
        id: "ts-1404460918",
        name: "Signal 361",
        location: {
            latitude: 12.9784181,
            longitude: 77.6407099
        },
        status: "green"
    },
    {
        id: "ts-1419475678",
        name: "Signal 362",
        location: {
            latitude: 12.8927681,
            longitude: 77.5988361
        },
        status: "red"
    },
    {
        id: "ts-1420105790",
        name: "Signal 363",
        location: {
            latitude: 12.9660019,
            longitude: 77.6253419
        },
        status: "red"
    },
    {
        id: "ts-1442364461",
        name: "Signal 364",
        location: {
            latitude: 12.9554114,
            longitude: 77.6893304
        },
        status: "green"
    },
    {
        id: "ts-1447805104",
        name: "Signal 365",
        location: {
            latitude: 12.9980708,
            longitude: 77.5530419
        },
        status: "green"
    },
    {
        id: "ts-1454651894",
        name: "Signal 366",
        location: {
            latitude: 12.9701048,
            longitude: 77.6103998
        },
        status: "red"
    },
    {
        id: "ts-1460720463",
        name: "Signal 367",
        location: {
            latitude: 12.9722464,
            longitude: 77.6194793
        },
        status: "red"
    },
    {
        id: "ts-1464138167",
        name: "Signal 368",
        location: {
            latitude: 12.9598409,
            longitude: 77.6489796
        },
        status: "red"
    },
    {
        id: "ts-1464786119",
        name: "Signal 369",
        location: {
            latitude: 12.9570041,
            longitude: 77.7008214
        },
        status: "red"
    },
    {
        id: "ts-1465590369",
        name: "Signal 370",
        location: {
            latitude: 12.9928395,
            longitude: 77.6096307
        },
        status: "green"
    },
    {
        id: "ts-1466495041",
        name: "Vidyapita Circle",
        location: {
            latitude: 12.9350964,
            longitude: 77.5606731
        },
        status: "red"
    },
    {
        id: "ts-1470833635",
        name: "Signal 372",
        location: {
            latitude: 12.9772789,
            longitude: 77.7510841
        },
        status: "yellow"
    },
    {
        id: "ts-1472269371",
        name: "Signal 373",
        location: {
            latitude: 12.9318314,
            longitude: 77.6134432
        },
        status: "green"
    },
    {
        id: "ts-1472878937",
        name: "Signal 374",
        location: {
            latitude: 12.9157274,
            longitude: 77.6381569
        },
        status: "red"
    },
    {
        id: "ts-1472879613",
        name: "Signal 375",
        location: {
            latitude: 12.916377,
            longitude: 77.632469
        },
        status: "green"
    },
    {
        id: "ts-1473972539",
        name: "Signal 376",
        location: {
            latitude: 12.9481107,
            longitude: 77.56807
        },
        status: "red"
    },
    {
        id: "ts-1473972578",
        name: "Signal 377",
        location: {
            latitude: 12.9476718,
            longitude: 77.5680541
        },
        status: "yellow"
    },
    {
        id: "ts-1473972602",
        name: "Signal 378",
        location: {
            latitude: 12.9477187,
            longitude: 77.5676939
        },
        status: "green"
    },
    {
        id: "ts-1487973952",
        name: "Signal 379",
        location: {
            latitude: 12.9356158,
            longitude: 77.5130713
        },
        status: "red"
    },
    {
        id: "ts-1516426367",
        name: "Signal 380",
        location: {
            latitude: 12.987285,
            longitude: 77.6191917
        },
        status: "green"
    },
    {
        id: "ts-1516426402",
        name: "Signal 381",
        location: {
            latitude: 12.9867795,
            longitude: 77.6194909
        },
        status: "red"
    },
    {
        id: "ts-1521036326",
        name: "Signal 382",
        location: {
            latitude: 12.9948866,
            longitude: 77.5550879
        },
        status: "green"
    },
    {
        id: "ts-1522519270",
        name: "Signal 383",
        location: {
            latitude: 12.9406387,
            longitude: 77.5736362
        },
        status: "yellow"
    },
    {
        id: "ts-1523537390",
        name: "Signal 384",
        location: {
            latitude: 12.9841964,
            longitude: 77.5969365
        },
        status: "red"
    },
    {
        id: "ts-1523569756",
        name: "Signal 385",
        location: {
            latitude: 12.9766767,
            longitude: 77.7272738
        },
        status: "green"
    },
    {
        id: "ts-1524489173",
        name: "Signal 386",
        location: {
            latitude: 12.9783484,
            longitude: 77.542589
        },
        status: "green"
    },
    {
        id: "ts-1548748220",
        name: "Signal 387",
        location: {
            latitude: 12.968149,
            longitude: 77.6002446
        },
        status: "red"
    },
    {
        id: "ts-1557291145",
        name: "Signal 388",
        location: {
            latitude: 12.9669918,
            longitude: 77.6112878
        },
        status: "green"
    },
    {
        id: "ts-1559350748",
        name: "Signal 389",
        location: {
            latitude: 12.9573404,
            longitude: 77.5733023
        },
        status: "green"
    },
    {
        id: "ts-1560168999",
        name: "Signal 390",
        location: {
            latitude: 12.9806055,
            longitude: 77.5746095
        },
        status: "yellow"
    },
    {
        id: "ts-1585678352",
        name: "Signal 391",
        location: {
            latitude: 12.9763232,
            longitude: 77.7270963
        },
        status: "green"
    },
    {
        id: "ts-1589590957",
        name: "Signal 392",
        location: {
            latitude: 12.9937243,
            longitude: 77.6074617
        },
        status: "green"
    },
    {
        id: "ts-1608973481",
        name: "Signal 393",
        location: {
            latitude: 12.9237686,
            longitude: 77.6401349
        },
        status: "green"
    },
    {
        id: "ts-1609661649",
        name: "Signal 394",
        location: {
            latitude: 12.923984,
            longitude: 77.6397693
        },
        status: "yellow"
    },
    {
        id: "ts-1611272493",
        name: "Signal 395",
        location: {
            latitude: 12.9675547,
            longitude: 77.588909
        },
        status: "green"
    },
    {
        id: "ts-1613152619",
        name: "Signal 396",
        location: {
            latitude: 12.9072616,
            longitude: 77.6289105
        },
        status: "red"
    },
    {
        id: "ts-1613154921",
        name: "Signal 397",
        location: {
            latitude: 12.8942451,
            longitude: 77.6366853
        },
        status: "red"
    },
    {
        id: "ts-1613154922",
        name: "Signal 398",
        location: {
            latitude: 12.8944658,
            longitude: 77.6367425
        },
        status: "green"
    },
    {
        id: "ts-1620344798",
        name: "Signal 399",
        location: {
            latitude: 12.9315406,
            longitude: 77.622498
        },
        status: "red"
    },
    {
        id: "ts-1623700176",
        name: "Signal 400",
        location: {
            latitude: 12.9482303,
            longitude: 77.5678668
        },
        status: "green"
    },
    {
        id: "ts-1631443660",
        name: "Signal 401",
        location: {
            latitude: 12.9891786,
            longitude: 77.7267562
        },
        status: "red"
    },
    {
        id: "ts-1636623257",
        name: "Signal 402",
        location: {
            latitude: 12.9806277,
            longitude: 77.5748295
        },
        status: "red"
    },
    {
        id: "ts-1636820456",
        name: "Signal 403",
        location: {
            latitude: 12.9801453,
            longitude: 77.5711205
        },
        status: "green"
    },
    {
        id: "ts-1636820490",
        name: "Signal 404",
        location: {
            latitude: 12.9799466,
            longitude: 77.5709964
        },
        status: "yellow"
    },
    {
        id: "ts-1650305509",
        name: "Signal 405",
        location: {
            latitude: 12.9768455,
            longitude: 77.5992955
        },
        status: "red"
    },
    {
        id: "ts-1653906418",
        name: "Signal 406",
        location: {
            latitude: 12.9161919,
            longitude: 77.6382615
        },
        status: "red"
    },
    {
        id: "ts-1668866516",
        name: "Signal 407",
        location: {
            latitude: 12.9638866,
            longitude: 77.5767121
        },
        status: "green"
    },
    {
        id: "ts-1675239400",
        name: "Sony World Signal",
        location: {
            latitude: 12.9374466,
            longitude: 77.6268399
        },
        status: "green"
    },
    {
        id: "ts-1698055256",
        name: "Signal 409",
        location: {
            latitude: 12.9818429,
            longitude: 77.6229962
        },
        status: "red"
    },
    {
        id: "ts-1719191867",
        name: "Signal 410",
        location: {
            latitude: 12.987519,
            longitude: 77.5196648
        },
        status: "green"
    },
    {
        id: "ts-1726152644",
        name: "Signal 411",
        location: {
            latitude: 12.9775854,
            longitude: 77.590487
        },
        status: "red"
    },
    {
        id: "ts-1732873704",
        name: "Signal 412",
        location: {
            latitude: 12.9065044,
            longitude: 77.5782584
        },
        status: "green"
    },
    {
        id: "ts-1775972263",
        name: "Iblur Junction",
        location: {
            latitude: 12.9206601,
            longitude: 77.6651968
        },
        status: "yellow"
    },
    {
        id: "ts-1780288371",
        name: "Signal 414",
        location: {
            latitude: 12.9543756,
            longitude: 77.544192
        },
        status: "yellow"
    },
    {
        id: "ts-1794666983",
        name: "Signal 415",
        location: {
            latitude: 13.0258942,
            longitude: 77.5207969
        },
        status: "red"
    },
    {
        id: "ts-1820423092",
        name: "Signal 416",
        location: {
            latitude: 12.9758813,
            longitude: 77.5645262
        },
        status: "green"
    },
    {
        id: "ts-1820431143",
        name: "Signal 417",
        location: {
            latitude: 12.9739005,
            longitude: 77.5496116
        },
        status: "green"
    },
    {
        id: "ts-1820431145",
        name: "Signal 418",
        location: {
            latitude: 12.9749654,
            longitude: 77.5481412
        },
        status: "green"
    },
    {
        id: "ts-1827247442",
        name: "Signal 419",
        location: {
            latitude: 12.9205434,
            longitude: 77.6652441
        },
        status: "red"
    },
    {
        id: "ts-1827480124",
        name: "Signal 420",
        location: {
            latitude: 12.9021347,
            longitude: 77.6011014
        },
        status: "red"
    },
    {
        id: "ts-1834315102",
        name: "Signal 421",
        location: {
            latitude: 13.0188431,
            longitude: 77.6557007
        },
        status: "red"
    },
    {
        id: "ts-1835344749",
        name: "Signal 422",
        location: {
            latitude: 12.9126629,
            longitude: 77.4850997
        },
        status: "green"
    },
    {
        id: "ts-1835344809",
        name: "Signal 423",
        location: {
            latitude: 12.915517,
            longitude: 77.5695788
        },
        status: "yellow"
    },
    {
        id: "ts-1836940343",
        name: "Signal 424",
        location: {
            latitude: 12.9605367,
            longitude: 77.5716748
        },
        status: "green"
    },
    {
        id: "ts-1836982983",
        name: "Signal 425",
        location: {
            latitude: 12.928172,
            longitude: 77.5462074
        },
        status: "green"
    },
    {
        id: "ts-1837005138",
        name: "Signal 426",
        location: {
            latitude: 12.9240947,
            longitude: 77.6286029
        },
        status: "red"
    },
    {
        id: "ts-1837297484",
        name: "Signal 427",
        location: {
            latitude: 13.008328,
            longitude: 77.6958894
        },
        status: "red"
    },
    {
        id: "ts-1837297533",
        name: "Signal 428",
        location: {
            latitude: 13.0170337,
            longitude: 77.7045159
        },
        status: "green"
    },
    {
        id: "ts-1837297537",
        name: "Signal 429",
        location: {
            latitude: 13.0171458,
            longitude: 77.7044679
        },
        status: "red"
    },
    {
        id: "ts-1837297544",
        name: "Signal 430",
        location: {
            latitude: 13.0192879,
            longitude: 77.7085908
        },
        status: "red"
    },
    {
        id: "ts-1837297545",
        name: "Signal 431",
        location: {
            latitude: 13.0193822,
            longitude: 77.7085208
        },
        status: "green"
    },
    {
        id: "ts-1837297546",
        name: "Signal 432",
        location: {
            latitude: 13.0194832,
            longitude: 77.708454
        },
        status: "green"
    },
    {
        id: "ts-1837297547",
        name: "Signal 433",
        location: {
            latitude: 13.0195557,
            longitude: 77.7084042
        },
        status: "green"
    },
    {
        id: "ts-1837378093",
        name: "Signal 434",
        location: {
            latitude: 12.9306069,
            longitude: 77.5472159
        },
        status: "red"
    },
    {
        id: "ts-1837378508",
        name: "Signal 435",
        location: {
            latitude: 12.9747529,
            longitude: 77.5486041
        },
        status: "green"
    },
    {
        id: "ts-1837445421",
        name: "Signal 436",
        location: {
            latitude: 12.975279,
            longitude: 77.6081191
        },
        status: "green"
    },
    {
        id: "ts-1837445468",
        name: "Signal 437",
        location: {
            latitude: 12.9808752,
            longitude: 77.6100132
        },
        status: "red"
    },
    {
        id: "ts-1837595259",
        name: "Signal 438",
        location: {
            latitude: 12.9779902,
            longitude: 77.6067138
        },
        status: "yellow"
    },
    {
        id: "ts-1837693718",
        name: "Signal 439",
        location: {
            latitude: 13.028675,
            longitude: 77.6637949
        },
        status: "green"
    },
    {
        id: "ts-1837716605",
        name: "Signal 440",
        location: {
            latitude: 12.9532701,
            longitude: 77.5737925
        },
        status: "red"
    },
    {
        id: "ts-1837716641",
        name: "Signal 441",
        location: {
            latitude: 12.9575946,
            longitude: 77.5738004
        },
        status: "red"
    },
    {
        id: "ts-1837757402",
        name: "Signal 442",
        location: {
            latitude: 12.9483195,
            longitude: 77.5768487
        },
        status: "green"
    },
    {
        id: "ts-1837783512",
        name: "Signal 443",
        location: {
            latitude: 12.9751952,
            longitude: 77.6143221
        },
        status: "green"
    },
    {
        id: "ts-1837783514",
        name: "Signal 444",
        location: {
            latitude: 12.9754298,
            longitude: 77.6142809
        },
        status: "yellow"
    },
    {
        id: "ts-1837783520",
        name: "Signal 445",
        location: {
            latitude: 12.9762779,
            longitude: 77.6148239
        },
        status: "green"
    },
    {
        id: "ts-1837823400",
        name: "Signal 446",
        location: {
            latitude: 13.0010386,
            longitude: 77.6118464
        },
        status: "green"
    },
    {
        id: "ts-1839764547",
        name: "Signal 447",
        location: {
            latitude: 13.0003982,
            longitude: 77.6763894
        },
        status: "yellow"
    },
    {
        id: "ts-1843585356",
        name: "Signal 448",
        location: {
            latitude: 12.9873773,
            longitude: 77.6193612
        },
        status: "red"
    },
    {
        id: "ts-1843612311",
        name: "Signal 449",
        location: {
            latitude: 12.9955715,
            longitude: 77.6164532
        },
        status: "red"
    },
    {
        id: "ts-1843612344",
        name: "Signal 450",
        location: {
            latitude: 12.9956109,
            longitude: 77.6168699
        },
        status: "green"
    },
    {
        id: "ts-1908194764",
        name: "Signal 451",
        location: {
            latitude: 12.9602913,
            longitude: 77.6015941
        },
        status: "red"
    },
    {
        id: "ts-1925410536",
        name: "Signal 452",
        location: {
            latitude: 12.9611046,
            longitude: 77.5880318
        },
        status: "green"
    },
    {
        id: "ts-1931853240",
        name: "Signal 453",
        location: {
            latitude: 12.9675272,
            longitude: 77.5450151
        },
        status: "green"
    },
    {
        id: "ts-1931866158",
        name: "Signal 454",
        location: {
            latitude: 12.9758072,
            longitude: 77.5644657
        },
        status: "green"
    },
    {
        id: "ts-1952787489",
        name: "Signal 455",
        location: {
            latitude: 13.0455588,
            longitude: 77.5563917
        },
        status: "red"
    },
    {
        id: "ts-1989699952",
        name: "Signal 456",
        location: {
            latitude: 12.9938571,
            longitude: 77.5852249
        },
        status: "red"
    },
    {
        id: "ts-1989699958",
        name: "Signal 457",
        location: {
            latitude: 12.9931813,
            longitude: 77.5850708
        },
        status: "green"
    },
    {
        id: "ts-1989700046",
        name: "Windsor Square",
        location: {
            latitude: 12.9938447,
            longitude: 77.5849259
        },
        status: "red"
    },
    {
        id: "ts-2014710885",
        name: "Signal 459",
        location: {
            latitude: 12.9844575,
            longitude: 77.5719189
        },
        status: "green"
    },
    {
        id: "ts-2014710915",
        name: "Signal 460",
        location: {
            latitude: 12.984492,
            longitude: 77.5723829
        },
        status: "yellow"
    },
    {
        id: "ts-2014710929",
        name: "Signal 461",
        location: {
            latitude: 12.9852023,
            longitude: 77.5720997
        },
        status: "green"
    },
    {
        id: "ts-2014710951",
        name: "Signal 462",
        location: {
            latitude: 12.9849073,
            longitude: 77.5721485
        },
        status: "green"
    },
    {
        id: "ts-2014710968",
        name: "Signal 463",
        location: {
            latitude: 12.9845988,
            longitude: 77.5722347
        },
        status: "green"
    },
    {
        id: "ts-2014870742",
        name: "Signal 464",
        location: {
            latitude: 12.9307629,
            longitude: 77.5860545
        },
        status: "green"
    },
    {
        id: "ts-2123555481",
        name: "Signal 465",
        location: {
            latitude: 12.9295234,
            longitude: 77.6155636
        },
        status: "red"
    },
    {
        id: "ts-2124745502",
        name: "Signal 466",
        location: {
            latitude: 13.1223335,
            longitude: 77.6305338
        },
        status: "yellow"
    },
    {
        id: "ts-2124745542",
        name: "Signal 467",
        location: {
            latitude: 13.1222587,
            longitude: 77.6303079
        },
        status: "red"
    },
    {
        id: "ts-2125916065",
        name: "Signal 468",
        location: {
            latitude: 13.0368318,
            longitude: 77.6407645
        },
        status: "green"
    },
    {
        id: "ts-2125916087",
        name: "Signal 469",
        location: {
            latitude: 13.0395254,
            longitude: 77.6416555
        },
        status: "green"
    },
    {
        id: "ts-2221301505",
        name: "Signal 470",
        location: {
            latitude: 12.957379,
            longitude: 77.5521321
        },
        status: "red"
    },
    {
        id: "ts-2224183005",
        name: "Signal 471",
        location: {
            latitude: 12.9382696,
            longitude: 77.5333355
        },
        status: "green"
    },
    {
        id: "ts-2268179269",
        name: "Signal 472",
        location: {
            latitude: 12.9662057,
            longitude: 77.6250413
        },
        status: "green"
    },
    {
        id: "ts-2300032317",
        name: "Anantapura Gate",
        location: {
            latitude: 13.114707,
            longitude: 77.5789749
        },
        status: "green"
    },
    {
        id: "ts-2334208112",
        name: "Signal 474",
        location: {
            latitude: 12.9530285,
            longitude: 77.5416056
        },
        status: "green"
    },
    {
        id: "ts-2382016055",
        name: "Signal 475",
        location: {
            latitude: 12.9831374,
            longitude: 77.5956513
        },
        status: "green"
    },
    {
        id: "ts-2386067856",
        name: "Signal 476",
        location: {
            latitude: 12.9833185,
            longitude: 77.5960121
        },
        status: "green"
    },
    {
        id: "ts-2387127870",
        name: "Signal 477",
        location: {
            latitude: 12.9240075,
            longitude: 77.6517361
        },
        status: "green"
    },
    {
        id: "ts-2387385680",
        name: "Signal 478",
        location: {
            latitude: 12.9246483,
            longitude: 77.6499056
        },
        status: "red"
    },
    {
        id: "ts-2402241110",
        name: "Signal 479",
        location: {
            latitude: 12.9451458,
            longitude: 77.5277866
        },
        status: "yellow"
    },
    {
        id: "ts-2406980229",
        name: "Signal 480",
        location: {
            latitude: 12.956675,
            longitude: 77.7009299
        },
        status: "green"
    },
    {
        id: "ts-2408586316",
        name: "Signal 481",
        location: {
            latitude: 13.0433929,
            longitude: 77.5907819
        },
        status: "red"
    },
    {
        id: "ts-2416186869",
        name: "Signal 482",
        location: {
            latitude: 12.8950657,
            longitude: 77.554968
        },
        status: "green"
    },
    {
        id: "ts-2446005983",
        name: "Signal 483",
        location: {
            latitude: 13.0436084,
            longitude: 77.5614265
        },
        status: "green"
    },
    {
        id: "ts-2447233119",
        name: "Signal 484",
        location: {
            latitude: 13.0815132,
            longitude: 77.5483393
        },
        status: "green"
    },
    {
        id: "ts-2447233120",
        name: "Signal 485",
        location: {
            latitude: 13.0815752,
            longitude: 77.5482279
        },
        status: "red"
    },
    {
        id: "ts-2447233122",
        name: "Signal 486",
        location: {
            latitude: 13.08168,
            longitude: 77.5482495
        },
        status: "red"
    },
    {
        id: "ts-2447233127",
        name: "Signal 487",
        location: {
            latitude: 13.0816898,
            longitude: 77.5483847
        },
        status: "red"
    },
    {
        id: "ts-2447233128",
        name: "Signal 488",
        location: {
            latitude: 13.0816038,
            longitude: 77.5484245
        },
        status: "green"
    },
    {
        id: "ts-2447233134",
        name: "Signal 489",
        location: {
            latitude: 13.081704,
            longitude: 77.5482869
        },
        status: "green"
    },
    {
        id: "ts-2450076422",
        name: "Signal 490",
        location: {
            latitude: 13.0458006,
            longitude: 77.5566184
        },
        status: "green"
    },
    {
        id: "ts-2451336631",
        name: "Signal 491",
        location: {
            latitude: 13.0953061,
            longitude: 77.5942859
        },
        status: "yellow"
    },
    {
        id: "ts-2451336634",
        name: "Kogilu Cross",
        location: {
            latitude: 13.1037498,
            longitude: 77.6000901
        },
        status: "red"
    },
    {
        id: "ts-2455311260",
        name: "Signal 493",
        location: {
            latitude: 13.1149996,
            longitude: 77.5789662
        },
        status: "green"
    },
    {
        id: "ts-2460236929",
        name: "Signal 494",
        location: {
            latitude: 13.0675577,
            longitude: 77.6337558
        },
        status: "green"
    },
    {
        id: "ts-2462936984",
        name: "Signal 495",
        location: {
            latitude: 12.984566,
            longitude: 77.5972588
        },
        status: "red"
    },
    {
        id: "ts-2473230014",
        name: "Signal 496",
        location: {
            latitude: 13.0091599,
            longitude: 77.6433951
        },
        status: "green"
    },
    {
        id: "ts-2513553543",
        name: "Signal 497",
        location: {
            latitude: 12.9064718,
            longitude: 77.5950891
        },
        status: "yellow"
    },
    {
        id: "ts-2572573442",
        name: "Signal 498",
        location: {
            latitude: 13.0434164,
            longitude: 77.5612012
        },
        status: "green"
    },
    {
        id: "ts-2578344267",
        name: "Signal 499",
        location: {
            latitude: 13.0435207,
            longitude: 77.5569382
        },
        status: "red"
    },
    {
        id: "ts-2694706128",
        name: "Signal 500",
        location: {
            latitude: 12.9738793,
            longitude: 77.6139898
        },
        status: "red"
    },
    {
        id: "ts-2703669937",
        name: "Signal 501",
        location: {
            latitude: 13.0139992,
            longitude: 77.5656194
        },
        status: "red"
    },
    {
        id: "ts-2703669945",
        name: "Signal 502",
        location: {
            latitude: 13.0148328,
            longitude: 77.5728327
        },
        status: "red"
    },
    {
        id: "ts-2890442001",
        name: "Signal 503",
        location: {
            latitude: 12.964402,
            longitude: 77.6066895
        },
        status: "green"
    },
    {
        id: "ts-2971089260",
        name: "Signal 504",
        location: {
            latitude: 12.9174509,
            longitude: 77.6227954
        },
        status: "green"
    },
    {
        id: "ts-2999494951",
        name: "Signal 505",
        location: {
            latitude: 12.9716577,
            longitude: 77.6195948
        },
        status: "red"
    },
    {
        id: "ts-2999530964",
        name: "Signal 506",
        location: {
            latitude: 12.9713821,
            longitude: 77.6195285
        },
        status: "red"
    },
    {
        id: "ts-2999530965",
        name: "Signal 507",
        location: {
            latitude: 12.9685126,
            longitude: 77.6140539
        },
        status: "green"
    },
    {
        id: "ts-2999607461",
        name: "Signal 508",
        location: {
            latitude: 12.9669099,
            longitude: 77.6205972
        },
        status: "red"
    },
    {
        id: "ts-3170035580",
        name: "Signal 509",
        location: {
            latitude: 12.9726436,
            longitude: 77.6203289
        },
        status: "green"
    },
    {
        id: "ts-3170035581",
        name: "Signal 510",
        location: {
            latitude: 12.9725667,
            longitude: 77.6196368
        },
        status: "red"
    },
    {
        id: "ts-3170035583",
        name: "Signal 511",
        location: {
            latitude: 12.9727701,
            longitude: 77.6199926
        },
        status: "green"
    },
    {
        id: "ts-3191039329",
        name: "Signal 512",
        location: {
            latitude: 13.0041187,
            longitude: 77.619726
        },
        status: "yellow"
    },
    {
        id: "ts-3242486429",
        name: "Signal 513",
        location: {
            latitude: 12.9233296,
            longitude: 77.5760183
        },
        status: "green"
    },
    {
        id: "ts-3268824710",
        name: "Signal 514",
        location: {
            latitude: 12.9650689,
            longitude: 77.6099455
        },
        status: "green"
    },
    {
        id: "ts-3304182907",
        name: "Signal 515",
        location: {
            latitude: 12.9817425,
            longitude: 77.6286922
        },
        status: "yellow"
    },
    {
        id: "ts-3304182912",
        name: "Signal 516",
        location: {
            latitude: 12.9817896,
            longitude: 77.6284605
        },
        status: "red"
    },
    {
        id: "ts-3305876069",
        name: "Signal 517",
        location: {
            latitude: 12.9765063,
            longitude: 77.6020105
        },
        status: "red"
    },
    {
        id: "ts-3305876073",
        name: "Signal 518",
        location: {
            latitude: 12.9791434,
            longitude: 77.6025839
        },
        status: "green"
    },
    {
        id: "ts-3311165099",
        name: "Signal 519",
        location: {
            latitude: 12.9298883,
            longitude: 77.6842905
        },
        status: "red"
    },
    {
        id: "ts-3342156305",
        name: "Signal 520",
        location: {
            latitude: 13.0020647,
            longitude: 77.6121555
        },
        status: "red"
    },
    {
        id: "ts-3352035441",
        name: "Signal 521",
        location: {
            latitude: 12.9828791,
            longitude: 77.6374502
        },
        status: "red"
    },
    {
        id: "ts-3356003439",
        name: "Signal 522",
        location: {
            latitude: 12.9480638,
            longitude: 77.5736714
        },
        status: "red"
    },
    {
        id: "ts-3356003440",
        name: "Signal 523",
        location: {
            latitude: 12.9483685,
            longitude: 77.5735362
        },
        status: "red"
    },
    {
        id: "ts-3370456514",
        name: "Signal 524",
        location: {
            latitude: 12.968868,
            longitude: 77.6478925
        },
        status: "green"
    },
    {
        id: "ts-3370456522",
        name: "Signal 525",
        location: {
            latitude: 12.9787067,
            longitude: 77.6466325
        },
        status: "green"
    },
    {
        id: "ts-3370456523",
        name: "Signal 526",
        location: {
            latitude: 12.9786193,
            longitude: 77.6464966
        },
        status: "green"
    },
    {
        id: "ts-3370456524",
        name: "Signal 527",
        location: {
            latitude: 12.9793487,
            longitude: 77.6464929
        },
        status: "green"
    },
    {
        id: "ts-3370456536",
        name: "Signal 528",
        location: {
            latitude: 12.9857557,
            longitude: 77.6452204
        },
        status: "red"
    },
    {
        id: "ts-3399083525",
        name: "Signal 529",
        location: {
            latitude: 12.935775,
            longitude: 77.6153649
        },
        status: "green"
    },
    {
        id: "ts-3530630455",
        name: "Signal 530",
        location: {
            latitude: 12.9633712,
            longitude: 77.6418156
        },
        status: "green"
    },
    {
        id: "ts-3659483616",
        name: "Signal 531",
        location: {
            latitude: 13.0192615,
            longitude: 77.6558113
        },
        status: "red"
    },
    {
        id: "ts-3664134386",
        name: "Signal 532",
        location: {
            latitude: 12.9674905,
            longitude: 77.5451089
        },
        status: "green"
    },
    {
        id: "ts-3676182371",
        name: "Signal 533",
        location: {
            latitude: 13.009792,
            longitude: 77.5907195
        },
        status: "green"
    },
    {
        id: "ts-3676182395",
        name: "Signal 534",
        location: {
            latitude: 13.0144958,
            longitude: 77.5843342
        },
        status: "green"
    },
    {
        id: "ts-3676198961",
        name: "Signal 535",
        location: {
            latitude: 12.9843485,
            longitude: 77.5823624
        },
        status: "red"
    },
    {
        id: "ts-3677919903",
        name: "Signal 536",
        location: {
            latitude: 12.9319484,
            longitude: 77.6137122
        },
        status: "green"
    },
    {
        id: "ts-3730964461",
        name: "Signal 537",
        location: {
            latitude: 12.9749592,
            longitude: 77.6253885
        },
        status: "red"
    },
    {
        id: "ts-3740957808",
        name: "Signal 538",
        location: {
            latitude: 12.9398042,
            longitude: 77.6253216
        },
        status: "green"
    },
    {
        id: "ts-3740957817",
        name: "Signal 539",
        location: {
            latitude: 12.9423591,
            longitude: 77.6228777
        },
        status: "red"
    },
    {
        id: "ts-3740957818",
        name: "Signal 540",
        location: {
            latitude: 12.9424494,
            longitude: 77.6225928
        },
        status: "yellow"
    },
    {
        id: "ts-3740962156",
        name: "Signal 541",
        location: {
            latitude: 12.9524384,
            longitude: 77.6201616
        },
        status: "red"
    },
    {
        id: "ts-3751677693",
        name: "Signal 542",
        location: {
            latitude: 12.9861498,
            longitude: 77.589737
        },
        status: "green"
    },
    {
        id: "ts-3755576616",
        name: "Signal 543",
        location: {
            latitude: 12.9803996,
            longitude: 77.5709223
        },
        status: "green"
    },
    {
        id: "ts-3770161990",
        name: "Signal 544",
        location: {
            latitude: 12.9606132,
            longitude: 77.5716719
        },
        status: "red"
    },
    {
        id: "ts-3780895950",
        name: "Signal 545",
        location: {
            latitude: 12.9594525,
            longitude: 77.6540357
        },
        status: "green"
    },
    {
        id: "ts-3780895951",
        name: "Signal 546",
        location: {
            latitude: 12.9593423,
            longitude: 77.6543758
        },
        status: "yellow"
    },
    {
        id: "ts-3801688125",
        name: "Signal 547",
        location: {
            latitude: 12.9342983,
            longitude: 77.6297442
        },
        status: "red"
    },
    {
        id: "ts-3801688126",
        name: "Signal 548",
        location: {
            latitude: 12.9345563,
            longitude: 77.629595
        },
        status: "green"
    },
    {
        id: "ts-3801692788",
        name: "Signal 549",
        location: {
            latitude: 12.9371207,
            longitude: 77.6270122
        },
        status: "green"
    },
    {
        id: "ts-3801692790",
        name: "Sony World Signal",
        location: {
            latitude: 12.9372333,
            longitude: 77.6268138
        },
        status: "green"
    },
    {
        id: "ts-3803149236",
        name: "Signal 551",
        location: {
            latitude: 12.9613474,
            longitude: 77.6359899
        },
        status: "green"
    },
    {
        id: "ts-3803149238",
        name: "Signal 552",
        location: {
            latitude: 12.9614881,
            longitude: 77.6357898
        },
        status: "green"
    },
    {
        id: "ts-3805003789",
        name: "Signal 553",
        location: {
            latitude: 12.9169462,
            longitude: 77.6228375
        },
        status: "green"
    },
    {
        id: "ts-3806218133",
        name: "Signal 554",
        location: {
            latitude: 12.9610338,
            longitude: 77.6385681
        },
        status: "red"
    },
    {
        id: "ts-3833983041",
        name: "Signal 555",
        location: {
            latitude: 13.0451875,
            longitude: 77.5073485
        },
        status: "green"
    },
    {
        id: "ts-3856885384",
        name: "Signal 556",
        location: {
            latitude: 13.0455631,
            longitude: 77.5074436
        },
        status: "green"
    },
    {
        id: "ts-3919859765",
        name: "Signal 557",
        location: {
            latitude: 12.9967511,
            longitude: 77.569567
        },
        status: "green"
    },
    {
        id: "ts-3919859801",
        name: "Signal 558",
        location: {
            latitude: 12.998256,
            longitude: 77.5529207
        },
        status: "red"
    },
    {
        id: "ts-3919864571",
        name: "Signal 559",
        location: {
            latitude: 12.9976388,
            longitude: 77.5500293
        },
        status: "red"
    },
    {
        id: "ts-3919864572",
        name: "Signal 560",
        location: {
            latitude: 12.9978642,
            longitude: 77.5503836
        },
        status: "green"
    },
    {
        id: "ts-3980460302",
        name: "Signal 561",
        location: {
            latitude: 12.9747321,
            longitude: 77.6199527
        },
        status: "green"
    },
    {
        id: "ts-3982070777",
        name: "Signal 562",
        location: {
            latitude: 12.9880349,
            longitude: 77.5124219
        },
        status: "red"
    },
    {
        id: "ts-4030004341",
        name: "Signal 563",
        location: {
            latitude: 12.9937568,
            longitude: 77.5955811
        },
        status: "green"
    },
    {
        id: "ts-4030321893",
        name: "Signal 564",
        location: {
            latitude: 12.990731,
            longitude: 77.5994505
        },
        status: "red"
    },
    {
        id: "ts-4044110261",
        name: "Signal 565",
        location: {
            latitude: 12.965037,
            longitude: 77.6099001
        },
        status: "green"
    },
    {
        id: "ts-4044110267",
        name: "Signal 566",
        location: {
            latitude: 12.9651727,
            longitude: 77.6176955
        },
        status: "green"
    },
    {
        id: "ts-4044263598",
        name: "Signal 567",
        location: {
            latitude: 12.9744669,
            longitude: 77.6110102
        },
        status: "red"
    },
    {
        id: "ts-4044263599",
        name: "Signal 568",
        location: {
            latitude: 12.9742918,
            longitude: 77.6112676
        },
        status: "red"
    },
    {
        id: "ts-4058219853",
        name: "Signal 569",
        location: {
            latitude: 12.9933787,
            longitude: 77.595564
        },
        status: "red"
    },
    {
        id: "ts-4058219855",
        name: "Signal 570",
        location: {
            latitude: 12.993319,
            longitude: 77.5959281
        },
        status: "red"
    },
    {
        id: "ts-4058224571",
        name: "Signal 571",
        location: {
            latitude: 12.9869098,
            longitude: 77.5886234
        },
        status: "green"
    },
    {
        id: "ts-4058224812",
        name: "Signal 572",
        location: {
            latitude: 12.9719671,
            longitude: 77.5941343
        },
        status: "red"
    },
    {
        id: "ts-4058224830",
        name: "Signal 573",
        location: {
            latitude: 12.9720628,
            longitude: 77.5941604
        },
        status: "green"
    },
    {
        id: "ts-4127931099",
        name: "Signal 574",
        location: {
            latitude: 12.9482396,
            longitude: 77.576775
        },
        status: "red"
    },
    {
        id: "ts-4127931100",
        name: "Signal 575",
        location: {
            latitude: 12.9482396,
            longitude: 77.5768488
        },
        status: "red"
    },
    {
        id: "ts-4161839915",
        name: "Signal 576",
        location: {
            latitude: 12.9276546,
            longitude: 77.620768
        },
        status: "yellow"
    },
    {
        id: "ts-4393134092",
        name: "Signal 577",
        location: {
            latitude: 13.0039059,
            longitude: 77.5494412
        },
        status: "green"
    },
    {
        id: "ts-4406882464",
        name: "Signal 578",
        location: {
            latitude: 12.9168,
            longitude: 77.6101285
        },
        status: "red"
    },
    {
        id: "ts-4445274988",
        name: "Signal 579",
        location: {
            latitude: 12.9186953,
            longitude: 77.6855476
        },
        status: "green"
    },
    {
        id: "ts-4465530917",
        name: "Signal 580",
        location: {
            latitude: 12.9569136,
            longitude: 77.7009594
        },
        status: "red"
    },
    {
        id: "ts-4490333425",
        name: "Signal 581",
        location: {
            latitude: 12.9297056,
            longitude: 77.6331099
        },
        status: "green"
    },
    {
        id: "ts-4614143317",
        name: "Signal 582",
        location: {
            latitude: 12.9063126,
            longitude: 77.5732216
        },
        status: "green"
    },
    {
        id: "ts-4692270064",
        name: "Signal 583",
        location: {
            latitude: 12.9166275,
            longitude: 77.6099779
        },
        status: "yellow"
    },
    {
        id: "ts-4692270065",
        name: "Signal 584",
        location: {
            latitude: 12.91641,
            longitude: 77.6100478
        },
        status: "red"
    },
    {
        id: "ts-4692270067",
        name: "Signal 585",
        location: {
            latitude: 12.9140086,
            longitude: 77.610037
        },
        status: "yellow"
    },
    {
        id: "ts-4692323186",
        name: "Signal 586",
        location: {
            latitude: 12.987977,
            longitude: 77.5122546
        },
        status: "green"
    },
    {
        id: "ts-4692323187",
        name: "Signal 587",
        location: {
            latitude: 12.9879387,
            longitude: 77.5123941
        },
        status: "red"
    },
    {
        id: "ts-4692331556",
        name: "Sumanahalli Junction",
        location: {
            latitude: 12.9870776,
            longitude: 77.5191772
        },
        status: "red"
    },
    {
        id: "ts-4696742622",
        name: "Signal 589",
        location: {
            latitude: 12.9784564,
            longitude: 77.5426989
        },
        status: "red"
    },
    {
        id: "ts-4701357989",
        name: "Signal 590",
        location: {
            latitude: 12.9177484,
            longitude: 77.5735837
        },
        status: "green"
    },
    {
        id: "ts-4703140386",
        name: "Signal 591",
        location: {
            latitude: 12.9209276,
            longitude: 77.6202958
        },
        status: "red"
    },
    {
        id: "ts-4703663956",
        name: "Signal 592",
        location: {
            latitude: 12.9949102,
            longitude: 77.5551716
        },
        status: "green"
    },
    {
        id: "ts-4703663964",
        name: "Signal 593",
        location: {
            latitude: 12.9982024,
            longitude: 77.5531939
        },
        status: "red"
    },
    {
        id: "ts-4703697696",
        name: "Signal 594",
        location: {
            latitude: 12.9758723,
            longitude: 77.5643949
        },
        status: "green"
    },
    {
        id: "ts-4703745959",
        name: "Signal 595",
        location: {
            latitude: 12.971069,
            longitude: 77.6588487
        },
        status: "red"
    },
    {
        id: "ts-4703745962",
        name: "Signal 596",
        location: {
            latitude: 12.9666992,
            longitude: 77.6616405
        },
        status: "green"
    },
    {
        id: "ts-4792982257",
        name: "Signal 597",
        location: {
            latitude: 12.9520291,
            longitude: 77.4995737
        },
        status: "green"
    },
    {
        id: "ts-4798470947",
        name: "Nagarabhavi Circle",
        location: {
            latitude: 12.9608478,
            longitude: 77.5124806
        },
        status: "green"
    },
    {
        id: "ts-4798470955",
        name: "Signal 599",
        location: {
            latitude: 12.9604572,
            longitude: 77.5042836
        },
        status: "red"
    },
    {
        id: "ts-4798470956",
        name: "Signal 600",
        location: {
            latitude: 12.9604312,
            longitude: 77.5043336
        },
        status: "yellow"
    },
    {
        id: "ts-4813269388",
        name: "Hoysala Circle",
        location: {
            latitude: 12.9246881,
            longitude: 77.4852147
        },
        status: "red"
    },
    {
        id: "ts-4814847103",
        name: "Signal 602",
        location: {
            latitude: 12.9610932,
            longitude: 77.5131021
        },
        status: "red"
    },
    {
        id: "ts-4824686444",
        name: "Signal 603",
        location: {
            latitude: 12.9553619,
            longitude: 77.6896081
        },
        status: "green"
    },
    {
        id: "ts-4824730263",
        name: "Signal 604",
        location: {
            latitude: 13.0040949,
            longitude: 77.5493184
        },
        status: "yellow"
    },
    {
        id: "ts-4829061654",
        name: "Signal 605",
        location: {
            latitude: 12.9367182,
            longitude: 77.5753738
        },
        status: "red"
    },
    {
        id: "ts-4829124449",
        name: "Signal 606",
        location: {
            latitude: 12.9435458,
            longitude: 77.579989
        },
        status: "red"
    },
    {
        id: "ts-4829190603",
        name: "Signal 607",
        location: {
            latitude: 12.936466,
            longitude: 77.5803092
        },
        status: "red"
    },
    {
        id: "ts-4830093913",
        name: "Signal 608",
        location: {
            latitude: 12.9391503,
            longitude: 77.5715098
        },
        status: "yellow"
    },
    {
        id: "ts-4839770850",
        name: "Signal 609",
        location: {
            latitude: 12.9162611,
            longitude: 77.6151746
        },
        status: "red"
    },
    {
        id: "ts-4843481807",
        name: "Signal 610",
        location: {
            latitude: 13.0376885,
            longitude: 77.5222791
        },
        status: "red"
    },
    {
        id: "ts-4843481808",
        name: "Signal 611",
        location: {
            latitude: 13.0378545,
            longitude: 77.5223884
        },
        status: "green"
    },
    {
        id: "ts-4843481809",
        name: "Signal 612",
        location: {
            latitude: 13.0379108,
            longitude: 77.5224241
        },
        status: "red"
    },
    {
        id: "ts-4843481817",
        name: "Signal 613",
        location: {
            latitude: 13.0377403,
            longitude: 77.5221843
        },
        status: "yellow"
    },
    {
        id: "ts-4843481818",
        name: "Signal 614",
        location: {
            latitude: 13.0379095,
            longitude: 77.5222885
        },
        status: "red"
    },
    {
        id: "ts-4843631313",
        name: "Signal 615",
        location: {
            latitude: 12.9519705,
            longitude: 77.4998542
        },
        status: "red"
    },
    {
        id: "ts-4845178133",
        name: "Signal 616",
        location: {
            latitude: 12.9441815,
            longitude: 77.607604
        },
        status: "red"
    },
    {
        id: "ts-4867634826",
        name: "Signal 617",
        location: {
            latitude: 12.9294146,
            longitude: 77.5736748
        },
        status: "red"
    },
    {
        id: "ts-4867634836",
        name: "Signal 618",
        location: {
            latitude: 12.9235159,
            longitude: 77.5737275
        },
        status: "yellow"
    },
    {
        id: "ts-4867634840",
        name: "Signal 619",
        location: {
            latitude: 12.9211576,
            longitude: 77.5735941
        },
        status: "green"
    },
    {
        id: "ts-4867659906",
        name: "Signal 620",
        location: {
            latitude: 12.920971,
            longitude: 77.573661
        },
        status: "green"
    },
    {
        id: "ts-4867659916",
        name: "Signal 621",
        location: {
            latitude: 12.9236898,
            longitude: 77.5736159
        },
        status: "yellow"
    },
    {
        id: "ts-4867659917",
        name: "Signal 622",
        location: {
            latitude: 12.9236008,
            longitude: 77.5734793
        },
        status: "red"
    },
    {
        id: "ts-4872113219",
        name: "Signal 623",
        location: {
            latitude: 12.9264594,
            longitude: 77.5612493
        },
        status: "yellow"
    },
    {
        id: "ts-4872132537",
        name: "Signal 624",
        location: {
            latitude: 12.9155276,
            longitude: 77.5696524
        },
        status: "red"
    },
    {
        id: "ts-4903183638",
        name: "Signal 625",
        location: {
            latitude: 12.9674833,
            longitude: 77.6113958
        },
        status: "yellow"
    },
    {
        id: "ts-4912560032",
        name: "Signal 626",
        location: {
            latitude: 13.0045175,
            longitude: 77.5538815
        },
        status: "red"
    },
    {
        id: "ts-4912560047",
        name: "Signal 627",
        location: {
            latitude: 12.9983441,
            longitude: 77.5530431
        },
        status: "green"
    },
    {
        id: "ts-5281839993",
        name: "Signal 628",
        location: {
            latitude: 12.9824943,
            longitude: 77.7581178
        },
        status: "red"
    },
    {
        id: "ts-5346743612",
        name: "Signal 629",
        location: {
            latitude: 12.9445573,
            longitude: 77.6028191
        },
        status: "yellow"
    },
    {
        id: "ts-5346843765",
        name: "Signal 630",
        location: {
            latitude: 12.928323,
            longitude: 77.6004956
        },
        status: "red"
    },
    {
        id: "ts-5346843768",
        name: "Signal 631",
        location: {
            latitude: 12.928375,
            longitude: 77.5972149
        },
        status: "green"
    },
    {
        id: "ts-5346843769",
        name: "Signal 632",
        location: {
            latitude: 12.9283763,
            longitude: 77.5971385
        },
        status: "red"
    },
    {
        id: "ts-5346843788",
        name: "Signal 633",
        location: {
            latitude: 12.917161,
            longitude: 77.5894331
        },
        status: "red"
    },
    {
        id: "ts-5354313548",
        name: "Signal 634",
        location: {
            latitude: 12.9101641,
            longitude: 77.5932548
        },
        status: "red"
    },
    {
        id: "ts-5354313587",
        name: "Signal 635",
        location: {
            latitude: 12.9101695,
            longitude: 77.5951611
        },
        status: "yellow"
    },
    {
        id: "ts-5354313589",
        name: "Signal 636",
        location: {
            latitude: 12.9103882,
            longitude: 77.595215
        },
        status: "green"
    },
    {
        id: "ts-5354313590",
        name: "Signal 637",
        location: {
            latitude: 12.9102827,
            longitude: 77.5950777
        },
        status: "green"
    },
    {
        id: "ts-5354313604",
        name: "Signal 638",
        location: {
            latitude: 12.9167021,
            longitude: 77.5950388
        },
        status: "red"
    },
    {
        id: "ts-5372295313",
        name: "Signal 639",
        location: {
            latitude: 12.9846845,
            longitude: 77.5823365
        },
        status: "green"
    },
    {
        id: "ts-5372340500",
        name: "Signal 640",
        location: {
            latitude: 12.9209797,
            longitude: 77.6659262
        },
        status: "red"
    },
    {
        id: "ts-5389437924",
        name: "Signal 641",
        location: {
            latitude: 12.9299326,
            longitude: 77.6331716
        },
        status: "red"
    },
    {
        id: "ts-5392852814",
        name: "Signal 642",
        location: {
            latitude: 13.0369592,
            longitude: 77.5659323
        },
        status: "red"
    },
    {
        id: "ts-5558663806",
        name: "Signal 643",
        location: {
            latitude: 12.9862701,
            longitude: 77.5887585
        },
        status: "green"
    },
    {
        id: "ts-5558684112",
        name: "Signal 644",
        location: {
            latitude: 12.9979266,
            longitude: 77.5510346
        },
        status: "green"
    },
    {
        id: "ts-5558684129",
        name: "Signal 645",
        location: {
            latitude: 12.9786698,
            longitude: 77.5731925
        },
        status: "red"
    },
    {
        id: "ts-5778431791",
        name: "Signal 646",
        location: {
            latitude: 12.9244217,
            longitude: 77.6503668
        },
        status: "green"
    },
    {
        id: "ts-5942550424",
        name: "Signal 647",
        location: {
            latitude: 12.9248418,
            longitude: 77.6334583
        },
        status: "yellow"
    },
    {
        id: "ts-5942550425",
        name: "Signal 648",
        location: {
            latitude: 12.9251326,
            longitude: 77.6336178
        },
        status: "green"
    },
    {
        id: "ts-5966255495",
        name: "Signal 649",
        location: {
            latitude: 13.0675878,
            longitude: 77.6335278
        },
        status: "red"
    },
    {
        id: "ts-6033543910",
        name: "Signal 650",
        location: {
            latitude: 13.0379385,
            longitude: 77.521822
        },
        status: "green"
    },
    {
        id: "ts-6033543943",
        name: "Signal 651",
        location: {
            latitude: 13.0422722,
            longitude: 77.5146345
        },
        status: "red"
    },
    {
        id: "ts-6130580752",
        name: "Signal 652",
        location: {
            latitude: 13.0529557,
            longitude: 77.6461605
        },
        status: "red"
    },
    {
        id: "ts-6131746732",
        name: "Signal 653",
        location: {
            latitude: 13.1036285,
            longitude: 77.6006481
        },
        status: "yellow"
    },
    {
        id: "ts-6142618373",
        name: "Signal 654",
        location: {
            latitude: 13.0443433,
            longitude: 77.626308
        },
        status: "green"
    },
    {
        id: "ts-6142618374",
        name: "Signal 655",
        location: {
            latitude: 13.0442829,
            longitude: 77.6263794
        },
        status: "red"
    },
    {
        id: "ts-6144095953",
        name: "Signal 656",
        location: {
            latitude: 12.9187634,
            longitude: 77.6855116
        },
        status: "red"
    },
    {
        id: "ts-6144112170",
        name: "Signal 657",
        location: {
            latitude: 12.9355069,
            longitude: 77.512996
        },
        status: "green"
    },
    {
        id: "ts-6197117882",
        name: "Signal 658",
        location: {
            latitude: 13.0345791,
            longitude: 77.6228196
        },
        status: "red"
    },
    {
        id: "ts-6341774847",
        name: "Signal 659",
        location: {
            latitude: 12.9760152,
            longitude: 77.6201782
        },
        status: "green"
    },
    {
        id: "ts-6341774848",
        name: "Signal 660",
        location: {
            latitude: 12.976351,
            longitude: 77.6203084
        },
        status: "green"
    },
    {
        id: "ts-6341774849",
        name: "Signal 661",
        location: {
            latitude: 12.9756683,
            longitude: 77.6202451
        },
        status: "red"
    },
    {
        id: "ts-6390283420",
        name: "Signal 662",
        location: {
            latitude: 12.9528208,
            longitude: 77.6052683
        },
        status: "green"
    },
    {
        id: "ts-6421171389",
        name: "Signal 663",
        location: {
            latitude: 12.9662487,
            longitude: 77.6068671
        },
        status: "green"
    },
    {
        id: "ts-6457608221",
        name: "Signal 664",
        location: {
            latitude: 13.0014697,
            longitude: 77.5943951
        },
        status: "green"
    },
    {
        id: "ts-6460998310",
        name: "Signal 665",
        location: {
            latitude: 12.9635851,
            longitude: 77.5849613
        },
        status: "green"
    },
    {
        id: "ts-6478194285",
        name: "Signal 666",
        location: {
            latitude: 13.0438281,
            longitude: 77.5609399
        },
        status: "green"
    },
    {
        id: "ts-6528476365",
        name: "Signal 667",
        location: {
            latitude: 12.9398742,
            longitude: 77.6255411
        },
        status: "green"
    },
    {
        id: "ts-6536640226",
        name: "Signal 668",
        location: {
            latitude: 12.9396995,
            longitude: 77.6254463
        },
        status: "yellow"
    },
    {
        id: "ts-6681243367",
        name: "Signal 669",
        location: {
            latitude: 12.9287775,
            longitude: 77.566273
        },
        status: "green"
    },
    {
        id: "ts-6852266946",
        name: "Signal 670",
        location: {
            latitude: 12.9216826,
            longitude: 77.5601313
        },
        status: "green"
    },
    {
        id: "ts-6885082495",
        name: "Signal 671",
        location: {
            latitude: 12.916315,
            longitude: 77.6322941
        },
        status: "green"
    },
    {
        id: "ts-6901338036",
        name: "Signal 672",
        location: {
            latitude: 12.9061811,
            longitude: 77.5951682
        },
        status: "green"
    },
    {
        id: "ts-6901551440",
        name: "Signal 673",
        location: {
            latitude: 12.9829593,
            longitude: 77.6374258
        },
        status: "red"
    },
    {
        id: "ts-6904207706",
        name: "Signal 674",
        location: {
            latitude: 12.9303605,
            longitude: 77.5433784
        },
        status: "green"
    },
    {
        id: "ts-6904207726",
        name: "Signal 675",
        location: {
            latitude: 12.9302806,
            longitude: 77.5435386
        },
        status: "yellow"
    },
    {
        id: "ts-6904892124",
        name: "Signal 676",
        location: {
            latitude: 12.9850983,
            longitude: 77.5720638
        },
        status: "red"
    },
    {
        id: "ts-6932109139",
        name: "Signal 677",
        location: {
            latitude: 12.9364735,
            longitude: 77.5187314
        },
        status: "green"
    },
    {
        id: "ts-6949633168",
        name: "Signal 678",
        location: {
            latitude: 13.0014174,
            longitude: 77.5944124
        },
        status: "green"
    },
    {
        id: "ts-6949633169",
        name: "Signal 679",
        location: {
            latitude: 13.0014563,
            longitude: 77.5945315
        },
        status: "red"
    },
    {
        id: "ts-7100612878",
        name: "Signal 680",
        location: {
            latitude: 12.9584109,
            longitude: 77.518754
        },
        status: "green"
    },
    {
        id: "ts-7132495604",
        name: "Signal 681",
        location: {
            latitude: 12.9649462,
            longitude: 77.5972439
        },
        status: "green"
    },
    {
        id: "ts-7164445939",
        name: "Signal 682",
        location: {
            latitude: 12.9611819,
            longitude: 77.5592119
        },
        status: "red"
    },
    {
        id: "ts-7172895621",
        name: "Signal 683",
        location: {
            latitude: 13.0396028,
            longitude: 77.6415245
        },
        status: "green"
    },
    {
        id: "ts-7172895628",
        name: "Signal 684",
        location: {
            latitude: 13.0395366,
            longitude: 77.6413177
        },
        status: "red"
    },
    {
        id: "ts-7180450199",
        name: "Signal 685",
        location: {
            latitude: 12.9294684,
            longitude: 77.5736757
        },
        status: "red"
    },
    {
        id: "ts-7228151804",
        name: "Signal 686",
        location: {
            latitude: 13.0436301,
            longitude: 77.5571499
        },
        status: "green"
    },
    {
        id: "ts-7228151805",
        name: "Signal 687",
        location: {
            latitude: 13.0440493,
            longitude: 77.5570506
        },
        status: "green"
    },
    {
        id: "ts-7235029649",
        name: "Signal 688",
        location: {
            latitude: 13.025067,
            longitude: 77.5930392
        },
        status: "green"
    },
    {
        id: "ts-7257695672",
        name: "Signal 689",
        location: {
            latitude: 13.0146854,
            longitude: 77.5725927
        },
        status: "green"
    },
    {
        id: "ts-7265495336",
        name: "Signal 690",
        location: {
            latitude: 12.9298394,
            longitude: 77.6329605
        },
        status: "red"
    },
    {
        id: "ts-7276500322",
        name: "Signal 691",
        location: {
            latitude: 12.9843822,
            longitude: 77.5822694
        },
        status: "red"
    },
    {
        id: "ts-7280461398",
        name: "Signal 692",
        location: {
            latitude: 13.0054785,
            longitude: 77.5933823
        },
        status: "green"
    },
    {
        id: "ts-7287467677",
        name: "Signal 693",
        location: {
            latitude: 12.9236128,
            longitude: 77.5763821
        },
        status: "red"
    },
    {
        id: "ts-7287571767",
        name: "Signal 694",
        location: {
            latitude: 12.9166344,
            longitude: 77.5968525
        },
        status: "red"
    },
    {
        id: "ts-7287571768",
        name: "Signal 695",
        location: {
            latitude: 12.9169701,
            longitude: 77.5950759
        },
        status: "green"
    },
    {
        id: "ts-7287984425",
        name: "Signal 696",
        location: {
            latitude: 12.9308255,
            longitude: 77.576133
        },
        status: "red"
    },
    {
        id: "ts-7287984426",
        name: "Signal 697",
        location: {
            latitude: 12.9308245,
            longitude: 77.5762084
        },
        status: "green"
    },
    {
        id: "ts-7287984441",
        name: "Signal 698",
        location: {
            latitude: 12.9309086,
            longitude: 77.5761017
        },
        status: "green"
    },
    {
        id: "ts-7287984471",
        name: "Signal 699",
        location: {
            latitude: 12.9235589,
            longitude: 77.5761169
        },
        status: "green"
    },
    {
        id: "ts-7287984479",
        name: "Signal 700",
        location: {
            latitude: 12.9209145,
            longitude: 77.5743412
        },
        status: "red"
    },
    {
        id: "ts-7289130033",
        name: "Signal 701",
        location: {
            latitude: 12.9246736,
            longitude: 77.4852728
        },
        status: "green"
    },
    {
        id: "ts-7290547276",
        name: "Signal 702",
        location: {
            latitude: 12.930819,
            longitude: 77.5837206
        },
        status: "green"
    },
    {
        id: "ts-7290547278",
        name: "Signal 703",
        location: {
            latitude: 12.9328967,
            longitude: 77.5840598
        },
        status: "green"
    },
    {
        id: "ts-7290764570",
        name: "Signal 704",
        location: {
            latitude: 12.928454,
            longitude: 77.5971407
        },
        status: "green"
    },
    {
        id: "ts-7291335557",
        name: "Signal 705",
        location: {
            latitude: 12.9283223,
            longitude: 77.6005903
        },
        status: "yellow"
    },
    {
        id: "ts-7291578193",
        name: "Signal 706",
        location: {
            latitude: 12.8895987,
            longitude: 77.5633357
        },
        status: "green"
    },
    {
        id: "ts-7358777736",
        name: "Signal 707",
        location: {
            latitude: 12.9071443,
            longitude: 77.4990509
        },
        status: "green"
    },
    {
        id: "ts-7374276349",
        name: "Signal 708",
        location: {
            latitude: 12.8795037,
            longitude: 77.5457458
        },
        status: "green"
    },
    {
        id: "ts-7374276363",
        name: "Signal 709",
        location: {
            latitude: 12.8834486,
            longitude: 77.5487601
        },
        status: "green"
    },
    {
        id: "ts-7384187432",
        name: "Signal 710",
        location: {
            latitude: 13.0188998,
            longitude: 77.6554248
        },
        status: "red"
    },
    {
        id: "ts-7384187433",
        name: "Signal 711",
        location: {
            latitude: 13.0192621,
            longitude: 77.655581
        },
        status: "red"
    },
    {
        id: "ts-7404474556",
        name: "Signal 712",
        location: {
            latitude: 13.0287432,
            longitude: 77.6637365
        },
        status: "red"
    },
    {
        id: "ts-7466248765",
        name: "Signal 713",
        location: {
            latitude: 12.8928284,
            longitude: 77.6104465
        },
        status: "green"
    },
    {
        id: "ts-7484168009",
        name: "Signal 714",
        location: {
            latitude: 12.9294738,
            longitude: 77.5736204
        },
        status: "red"
    },
    {
        id: "ts-7485457399",
        name: "Signal 715",
        location: {
            latitude: 13.0129337,
            longitude: 77.6621283
        },
        status: "green"
    },
    {
        id: "ts-7485457400",
        name: "Signal 716",
        location: {
            latitude: 13.0131296,
            longitude: 77.6625191
        },
        status: "red"
    },
    {
        id: "ts-7617898611",
        name: "Signal 717",
        location: {
            latitude: 12.9928543,
            longitude: 77.6097703
        },
        status: "yellow"
    },
    {
        id: "ts-7686283259",
        name: "Signal 718",
        location: {
            latitude: 12.9736464,
            longitude: 77.6139762
        },
        status: "red"
    },
    {
        id: "ts-8504197414",
        name: "Signal 719",
        location: {
            latitude: 12.9846024,
            longitude: 77.5886256
        },
        status: "green"
    },
    {
        id: "ts-9140200248",
        name: "Signal 720",
        location: {
            latitude: 12.9729291,
            longitude: 77.581719
        },
        status: "green"
    },
    {
        id: "ts-9339539331",
        name: "Signal 721",
        location: {
            latitude: 12.9306739,
            longitude: 77.5436163
        },
        status: "green"
    },
    {
        id: "ts-9506746892",
        name: "Signal 722",
        location: {
            latitude: 12.9292918,
            longitude: 77.6152112
        },
        status: "red"
    },
    {
        id: "ts-9507354636",
        name: "Signal 723",
        location: {
            latitude: 13.0400826,
            longitude: 77.6244008
        },
        status: "green"
    },
    {
        id: "ts-9603588754",
        name: "Signal 724",
        location: {
            latitude: 12.9878295,
            longitude: 77.5374297
        },
        status: "yellow"
    },
    {
        id: "ts-9629025771",
        name: "Signal 725",
        location: {
            latitude: 12.9794664,
            longitude: 77.5819718
        },
        status: "red"
    },
    {
        id: "ts-9691908031",
        name: "Signal 726",
        location: {
            latitude: 13.0454607,
            longitude: 77.5072484
        },
        status: "green"
    },
    {
        id: "ts-9691908032",
        name: "Signal 727",
        location: {
            latitude: 13.0454997,
            longitude: 77.507267
        },
        status: "red"
    },
    {
        id: "ts-9691908049",
        name: "Signal 728",
        location: {
            latitude: 13.0566128,
            longitude: 77.5072593
        },
        status: "yellow"
    },
    {
        id: "ts-9695761624",
        name: "Signal 729",
        location: {
            latitude: 13.1022736,
            longitude: 77.5862862
        },
        status: "red"
    },
    {
        id: "ts-9713504810",
        name: "Signal 730",
        location: {
            latitude: 13.0282756,
            longitude: 77.5713221
        },
        status: "red"
    },
    {
        id: "ts-9817001114",
        name: "Signal 731",
        location: {
            latitude: 13.0393364,
            longitude: 77.5640809
        },
        status: "red"
    },
    {
        id: "ts-9820351002",
        name: "Signal 732",
        location: {
            latitude: 12.8700468,
            longitude: 77.6533235
        },
        status: "red"
    },
    {
        id: "ts-9820351003",
        name: "Signal 733",
        location: {
            latitude: 12.8700093,
            longitude: 77.6535236
        },
        status: "red"
    },
    {
        id: "ts-9843291185",
        name: "Signal 734",
        location: {
            latitude: 12.9557708,
            longitude: 77.7150315
        },
        status: "red"
    },
    {
        id: "ts-9844475372",
        name: "Signal 735",
        location: {
            latitude: 12.9393719,
            longitude: 77.6954445
        },
        status: "green"
    },
    {
        id: "ts-9844475373",
        name: "Signal 736",
        location: {
            latitude: 12.9394618,
            longitude: 77.6949651
        },
        status: "green"
    },
    {
        id: "ts-9846344721",
        name: "Signal 737",
        location: {
            latitude: 12.9597159,
            longitude: 77.6492467
        },
        status: "red"
    },
    {
        id: "ts-9857144282",
        name: "Signal 738",
        location: {
            latitude: 12.9242242,
            longitude: 77.6518465
        },
        status: "red"
    },
    {
        id: "ts-9857144283",
        name: "Signal 739",
        location: {
            latitude: 12.9242955,
            longitude: 77.6516743
        },
        status: "yellow"
    },
    {
        id: "ts-9880815311",
        name: "Signal 740",
        location: {
            latitude: 13.0952044,
            longitude: 77.5943934
        },
        status: "red"
    },
    {
        id: "ts-9930000954",
        name: "Signal 741",
        location: {
            latitude: 12.9904853,
            longitude: 77.5996658
        },
        status: "green"
    },
    {
        id: "ts-9930001009",
        name: "Signal 742",
        location: {
            latitude: 12.9794981,
            longitude: 77.5817433
        },
        status: "red"
    },
    {
        id: "ts-9932318844",
        name: "Signal 743",
        location: {
            latitude: 12.9727556,
            longitude: 77.7116295
        },
        status: "green"
    },
    {
        id: "ts-9933265932",
        name: "Signal 744",
        location: {
            latitude: 12.9682673,
            longitude: 77.6063014
        },
        status: "green"
    },
    {
        id: "ts-9935424308",
        name: "Signal 745",
        location: {
            latitude: 13.0055678,
            longitude: 77.5651616
        },
        status: "red"
    },
    {
        id: "ts-9938657075",
        name: "Signal 746",
        location: {
            latitude: 12.9956077,
            longitude: 77.5895917
        },
        status: "green"
    },
    {
        id: "ts-9939398569",
        name: "Signal 747",
        location: {
            latitude: 12.9641286,
            longitude: 77.5698151
        },
        status: "green"
    },
    {
        id: "ts-9939398599",
        name: "Signal 748",
        location: {
            latitude: 12.9640617,
            longitude: 77.5696055
        },
        status: "green"
    },
    {
        id: "ts-9939407828",
        name: "Signal 749",
        location: {
            latitude: 12.9642019,
            longitude: 77.5695397
        },
        status: "green"
    },
    {
        id: "ts-9951192668",
        name: "Signal 750",
        location: {
            latitude: 12.9724014,
            longitude: 77.7115623
        },
        status: "red"
    },
    {
        id: "ts-9952997318",
        name: "Signal 751",
        location: {
            latitude: 12.9640306,
            longitude: 77.5855087
        },
        status: "red"
    },
    {
        id: "ts-9953892391",
        name: "Signal 752",
        location: {
            latitude: 12.9560443,
            longitude: 77.7145709
        },
        status: "green"
    },
    {
        id: "ts-9953892394",
        name: "Signal 753",
        location: {
            latitude: 12.9561766,
            longitude: 77.7149403
        },
        status: "red"
    },
    {
        id: "ts-9953892395",
        name: "Signal 754",
        location: {
            latitude: 12.9556991,
            longitude: 77.7147636
        },
        status: "red"
    },
    {
        id: "ts-9982048435",
        name: "Signal 755",
        location: {
            latitude: 12.983426,
            longitude: 77.7679713
        },
        status: "green"
    },
    {
        id: "ts-9984551452",
        name: "Signal 756",
        location: {
            latitude: 12.9741929,
            longitude: 77.6111055
        },
        status: "red"
    },
    {
        id: "ts-10001161216",
        name: "Signal 757",
        location: {
            latitude: 12.9679224,
            longitude: 77.5871148
        },
        status: "green"
    },
    {
        id: "ts-10003979594",
        name: "Signal 758",
        location: {
            latitude: 13.006527,
            longitude: 77.5788804
        },
        status: "red"
    },
    {
        id: "ts-10003979595",
        name: "Signal 759",
        location: {
            latitude: 13.0065399,
            longitude: 77.5786862
        },
        status: "green"
    },
    {
        id: "ts-10003979596",
        name: "Signal 760",
        location: {
            latitude: 13.0063819,
            longitude: 77.5786367
        },
        status: "green"
    },
    {
        id: "ts-10005593343",
        name: "Signal 761",
        location: {
            latitude: 12.9729382,
            longitude: 77.5387469
        },
        status: "green"
    },
    {
        id: "ts-10005593344",
        name: "Signal 762",
        location: {
            latitude: 12.9728978,
            longitude: 77.5384684
        },
        status: "green"
    },
    {
        id: "ts-10010955383",
        name: "Signal 763",
        location: {
            latitude: 12.9613476,
            longitude: 77.5591301
        },
        status: "green"
    },
    {
        id: "ts-10010955384",
        name: "Signal 764",
        location: {
            latitude: 12.9611584,
            longitude: 77.5591051
        },
        status: "red"
    },
    {
        id: "ts-10015684285",
        name: "Signal 765",
        location: {
            latitude: 12.9798845,
            longitude: 77.5711031
        },
        status: "green"
    },
    {
        id: "ts-10016225617",
        name: "Signal 766",
        location: {
            latitude: 12.9809221,
            longitude: 77.5970329
        },
        status: "red"
    },
    {
        id: "ts-10016346057",
        name: "Signal 767",
        location: {
            latitude: 12.97673,
            longitude: 77.6019032
        },
        status: "green"
    },
    {
        id: "ts-10020359439",
        name: "Signal 768",
        location: {
            latitude: 12.967503,
            longitude: 77.6110962
        },
        status: "red"
    },
    {
        id: "ts-10035532963",
        name: "Signal 769",
        location: {
            latitude: 12.9787401,
            longitude: 77.573267
        },
        status: "green"
    },
    {
        id: "ts-10043357419",
        name: "Signal 770",
        location: {
            latitude: 12.929752,
            longitude: 77.6150337
        },
        status: "red"
    },
    {
        id: "ts-10043357421",
        name: "Signal 771",
        location: {
            latitude: 12.9526922,
            longitude: 77.6051091
        },
        status: "green"
    },
    {
        id: "ts-10043357423",
        name: "Signal 772",
        location: {
            latitude: 12.9663803,
            longitude: 77.6067892
        },
        status: "red"
    },
    {
        id: "ts-10068662144",
        name: "Signal 773",
        location: {
            latitude: 12.9383568,
            longitude: 77.6328208
        },
        status: "red"
    },
    {
        id: "ts-10068662145",
        name: "Signal 774",
        location: {
            latitude: 12.9386664,
            longitude: 77.6326356
        },
        status: "yellow"
    },
    {
        id: "ts-10068956785",
        name: "Signal 775",
        location: {
            latitude: 12.9342159,
            longitude: 77.6123554
        },
        status: "red"
    },
    {
        id: "ts-10068956821",
        name: "Signal 776",
        location: {
            latitude: 12.9358762,
            longitude: 77.6152156
        },
        status: "green"
    },
    {
        id: "ts-10072942642",
        name: "Signal 777",
        location: {
            latitude: 12.913959,
            longitude: 77.6100369
        },
        status: "red"
    },
    {
        id: "ts-10072942645",
        name: "Signal 778",
        location: {
            latitude: 12.9140121,
            longitude: 77.6101028
        },
        status: "green"
    },
    {
        id: "ts-10120941856",
        name: "Signal 779",
        location: {
            latitude: 12.9680656,
            longitude: 77.6061958
        },
        status: "green"
    },
    {
        id: "ts-10121050218",
        name: "Signal 780",
        location: {
            latitude: 12.9832923,
            longitude: 77.5956143
        },
        status: "green"
    },
    {
        id: "ts-10121158786",
        name: "Signal 781",
        location: {
            latitude: 12.9805134,
            longitude: 77.577043
        },
        status: "red"
    },
    {
        id: "ts-10123663920",
        name: "Signal 782",
        location: {
            latitude: 12.9809149,
            longitude: 77.6102419
        },
        status: "green"
    },
    {
        id: "ts-10123826914",
        name: "Signal 783",
        location: {
            latitude: 12.9775599,
            longitude: 77.5909308
        },
        status: "red"
    },
    {
        id: "ts-10156396908",
        name: "Signal 784",
        location: {
            latitude: 13.038175,
            longitude: 77.5219426
        },
        status: "yellow"
    },
    {
        id: "ts-10187842628",
        name: "Signal 785",
        location: {
            latitude: 13.03192,
            longitude: 77.6218381
        },
        status: "green"
    },
    {
        id: "ts-10196262521",
        name: "Signal 786",
        location: {
            latitude: 12.9111572,
            longitude: 77.6836755
        },
        status: "green"
    },
    {
        id: "ts-10231033892",
        name: "Signal 787",
        location: {
            latitude: 12.9744196,
            longitude: 77.5783155
        },
        status: "red"
    },
    {
        id: "ts-10274836884",
        name: "Signal 788",
        location: {
            latitude: 13.0451542,
            longitude: 77.5073415
        },
        status: "red"
    },
    {
        id: "ts-10274940012",
        name: "Signal 789",
        location: {
            latitude: 13.0666816,
            longitude: 77.5033502
        },
        status: "green"
    },
    {
        id: "ts-10274960896",
        name: "Signal 790",
        location: {
            latitude: 12.9714683,
            longitude: 77.6588689
        },
        status: "red"
    },
    {
        id: "ts-10282769898",
        name: "Signal 791",
        location: {
            latitude: 12.9213128,
            longitude: 77.6202306
        },
        status: "red"
    },
    {
        id: "ts-10284348022",
        name: "Signal 792",
        location: {
            latitude: 12.9298091,
            longitude: 77.6332856
        },
        status: "green"
    },
    {
        id: "ts-10284348038",
        name: "Signal 793",
        location: {
            latitude: 12.9440489,
            longitude: 77.6073719
        },
        status: "red"
    },
    {
        id: "ts-10289145756",
        name: "Signal 794",
        location: {
            latitude: 12.9558168,
            longitude: 77.5922039
        },
        status: "green"
    },
    {
        id: "ts-10291078965",
        name: "Signal 795",
        location: {
            latitude: 12.9855192,
            longitude: 77.6450999
        },
        status: "green"
    },
    {
        id: "ts-10560858053",
        name: "Signal 796",
        location: {
            latitude: 12.9726391,
            longitude: 77.6193087
        },
        status: "green"
    },
    {
        id: "ts-10585575510",
        name: "Signal 797",
        location: {
            latitude: 13.0393549,
            longitude: 77.6414418
        },
        status: "green"
    },
    {
        id: "ts-10678693502",
        name: "Signal 798",
        location: {
            latitude: 12.9924741,
            longitude: 77.7162864
        },
        status: "red"
    },
    {
        id: "ts-10684982315",
        name: "Signal 799",
        location: {
            latitude: 13.0370702,
            longitude: 77.5659484
        },
        status: "red"
    },
    {
        id: "ts-10684982316",
        name: "Signal 800",
        location: {
            latitude: 13.0370192,
            longitude: 77.5658846
        },
        status: "red"
    },
    {
        id: "ts-10685321384",
        name: "Signal 801",
        location: {
            latitude: 12.9571651,
            longitude: 77.573945
        },
        status: "green"
    },
    {
        id: "ts-10685321385",
        name: "Signal 802",
        location: {
            latitude: 12.9570089,
            longitude: 77.5734926
        },
        status: "red"
    },
    {
        id: "ts-10685860710",
        name: "Signal 803",
        location: {
            latitude: 12.9614543,
            longitude: 77.5842713
        },
        status: "red"
    },
    {
        id: "ts-10685860711",
        name: "Signal 804",
        location: {
            latitude: 12.9611395,
            longitude: 77.5884055
        },
        status: "green"
    },
    {
        id: "ts-10687622732",
        name: "Signal 805",
        location: {
            latitude: 13.039395,
            longitude: 77.5641214
        },
        status: "green"
    },
    {
        id: "ts-10691285605",
        name: "Signal 806",
        location: {
            latitude: 13.0284,
            longitude: 77.5714577
        },
        status: "red"
    },
    {
        id: "ts-10695052518",
        name: "Signal 807",
        location: {
            latitude: 12.9765887,
            longitude: 77.7270215
        },
        status: "green"
    },
    {
        id: "ts-10698644147",
        name: "Signal 808",
        location: {
            latitude: 13.0404914,
            longitude: 77.6242997
        },
        status: "red"
    },
    {
        id: "ts-10698644148",
        name: "Signal 809",
        location: {
            latitude: 13.039978,
            longitude: 77.6241945
        },
        status: "red"
    },
    {
        id: "ts-10731023449",
        name: "Signal 810",
        location: {
            latitude: 12.9764721,
            longitude: 77.7273767
        },
        status: "green"
    },
    {
        id: "ts-10783592398",
        name: "Signal 811",
        location: {
            latitude: 12.9723212,
            longitude: 77.5939182
        },
        status: "green"
    },
    {
        id: "ts-10783657574",
        name: "Signal 812",
        location: {
            latitude: 13.0302539,
            longitude: 77.6210978
        },
        status: "green"
    },
    {
        id: "ts-10783997175",
        name: "Signal 813",
        location: {
            latitude: 12.9266231,
            longitude: 77.5613573
        },
        status: "yellow"
    },
    {
        id: "ts-10784133389",
        name: "Signal 814",
        location: {
            latitude: 13.0496305,
            longitude: 77.5928584
        },
        status: "red"
    },
    {
        id: "ts-10784133390",
        name: "Signal 815",
        location: {
            latitude: 13.0496668,
            longitude: 77.5927471
        },
        status: "green"
    },
    {
        id: "ts-10786947292",
        name: "Signal 816",
        location: {
            latitude: 13.0345607,
            longitude: 77.6228731
        },
        status: "green"
    },
    {
        id: "ts-10839591755",
        name: "Signal 817",
        location: {
            latitude: 13.0347143,
            longitude: 77.5573607
        },
        status: "green"
    },
    {
        id: "ts-10839591756",
        name: "Signal 818",
        location: {
            latitude: 13.0347635,
            longitude: 77.5574245
        },
        status: "red"
    },
    {
        id: "ts-10839591759",
        name: "Signal 819",
        location: {
            latitude: 13.0348589,
            longitude: 77.557418
        },
        status: "green"
    },
    {
        id: "ts-10860559946",
        name: "Signal 820",
        location: {
            latitude: 12.9120996,
            longitude: 77.6448611
        },
        status: "red"
    },
    {
        id: "ts-10860559948",
        name: "Signal 821",
        location: {
            latitude: 12.9123909,
            longitude: 77.6446606
        },
        status: "red"
    },
    {
        id: "ts-10860559949",
        name: "Signal 822",
        location: {
            latitude: 12.9121874,
            longitude: 77.6444776
        },
        status: "green"
    },
    {
        id: "ts-10861673599",
        name: "Signal 823",
        location: {
            latitude: 12.9561767,
            longitude: 77.5774688
        },
        status: "red"
    },
    {
        id: "ts-10948126481",
        name: "Signal 824",
        location: {
            latitude: 12.9187593,
            longitude: 77.6853693
        },
        status: "red"
    },
    {
        id: "ts-10975890137",
        name: "Signal 825",
        location: {
            latitude: 13.103509,
            longitude: 77.6006196
        },
        status: "green"
    },
    {
        id: "ts-10978687898",
        name: "Signal 826",
        location: {
            latitude: 12.9757279,
            longitude: 77.5867625
        },
        status: "green"
    },
    {
        id: "ts-10978687899",
        name: "Signal 827",
        location: {
            latitude: 12.9756888,
            longitude: 77.5876014
        },
        status: "red"
    },
    {
        id: "ts-10978687900",
        name: "Signal 828",
        location: {
            latitude: 12.9761583,
            longitude: 77.5870202
        },
        status: "green"
    },
    {
        id: "ts-10978687901",
        name: "Signal 829",
        location: {
            latitude: 12.9759154,
            longitude: 77.5876321
        },
        status: "green"
    },
    {
        id: "ts-10991477214",
        name: "Signal 830",
        location: {
            latitude: 13.0301845,
            longitude: 77.5370565
        },
        status: "red"
    },
    {
        id: "ts-11003327959",
        name: "Signal 831",
        location: {
            latitude: 12.9716235,
            longitude: 77.6358156
        },
        status: "green"
    },
    {
        id: "ts-11003327960",
        name: "Signal 832",
        location: {
            latitude: 12.9717147,
            longitude: 77.6360294
        },
        status: "red"
    },
    {
        id: "ts-11065720738",
        name: "Signal 833",
        location: {
            latitude: 12.9830562,
            longitude: 77.5603916
        },
        status: "green"
    },
    {
        id: "ts-11065720756",
        name: "Signal 834",
        location: {
            latitude: 12.9834174,
            longitude: 77.5603109
        },
        status: "green"
    },
    {
        id: "ts-11071026806",
        name: "Signal 835",
        location: {
            latitude: 12.9755332,
            longitude: 77.5759111
        },
        status: "red"
    },
    {
        id: "ts-11150090936",
        name: "Signal 836",
        location: {
            latitude: 12.969737,
            longitude: 77.749917
        },
        status: "green"
    },
    {
        id: "ts-11150090939",
        name: "Signal 837",
        location: {
            latitude: 12.9699275,
            longitude: 77.7500068
        },
        status: "red"
    },
    {
        id: "ts-11156382804",
        name: "Signal 838",
        location: {
            latitude: 12.9571627,
            longitude: 77.5697442
        },
        status: "red"
    },
    {
        id: "ts-11156420305",
        name: "Signal 839",
        location: {
            latitude: 12.9572087,
            longitude: 77.5695432
        },
        status: "green"
    },
    {
        id: "ts-11156420306",
        name: "Signal 840",
        location: {
            latitude: 12.95706,
            longitude: 77.569626
        },
        status: "green"
    },
    {
        id: "ts-11178643865",
        name: "Signal 841",
        location: {
            latitude: 12.9481853,
            longitude: 77.5702423
        },
        status: "green"
    },
    {
        id: "ts-11201582978",
        name: "Signal 842",
        location: {
            latitude: 12.906448,
            longitude: 77.5802293
        },
        status: "red"
    },
    {
        id: "ts-11201582981",
        name: "Signal 843",
        location: {
            latitude: 12.9063624,
            longitude: 77.5805102
        },
        status: "red"
    },
    {
        id: "ts-11212228043",
        name: "Signal 844",
        location: {
            latitude: 13.0738288,
            longitude: 77.5927832
        },
        status: "green"
    },
    {
        id: "ts-11228965366",
        name: "Signal 845",
        location: {
            latitude: 12.9592362,
            longitude: 77.654204
        },
        status: "yellow"
    },
    {
        id: "ts-11260122967",
        name: "Signal 846",
        location: {
            latitude: 12.9157991,
            longitude: 77.6383683
        },
        status: "green"
    },
    {
        id: "ts-11260122969",
        name: "Signal 847",
        location: {
            latitude: 12.9161178,
            longitude: 77.6380625
        },
        status: "green"
    },
    {
        id: "ts-11265002206",
        name: "Signal 848",
        location: {
            latitude: 12.9307704,
            longitude: 77.5802834
        },
        status: "green"
    },
    {
        id: "ts-11265002207",
        name: "Signal 849",
        location: {
            latitude: 12.930935,
            longitude: 77.5801967
        },
        status: "yellow"
    },
    {
        id: "ts-11265002208",
        name: "Signal 850",
        location: {
            latitude: 12.9308674,
            longitude: 77.5799708
        },
        status: "red"
    },
    {
        id: "ts-11265002209",
        name: "Signal 851",
        location: {
            latitude: 12.9307053,
            longitude: 77.5800701
        },
        status: "green"
    },
    {
        id: "ts-11268445211",
        name: "Signal 852",
        location: {
            latitude: 12.986359,
            longitude: 77.579784
        },
        status: "red"
    },
    {
        id: "ts-11268445212",
        name: "Signal 853",
        location: {
            latitude: 12.9863639,
            longitude: 77.5795805
        },
        status: "green"
    },
    {
        id: "ts-11268445213",
        name: "Signal 854",
        location: {
            latitude: 12.9866319,
            longitude: 77.5798307
        },
        status: "green"
    },
    {
        id: "ts-11268445214",
        name: "Signal 855",
        location: {
            latitude: 12.9866349,
            longitude: 77.5796238
        },
        status: "green"
    },
    {
        id: "ts-11268507380",
        name: "Signal 856",
        location: {
            latitude: 12.8904969,
            longitude: 77.5981993
        },
        status: "red"
    },
    {
        id: "ts-11268507381",
        name: "Signal 857",
        location: {
            latitude: 12.8906106,
            longitude: 77.5979714
        },
        status: "red"
    },
    {
        id: "ts-11268507393",
        name: "Signal 858",
        location: {
            latitude: 12.8906096,
            longitude: 77.5981839
        },
        status: "green"
    },
    {
        id: "ts-11268507394",
        name: "Signal 859",
        location: {
            latitude: 12.8904998,
            longitude: 77.5980462
        },
        status: "green"
    },
    {
        id: "ts-11271693400",
        name: "Signal 860",
        location: {
            latitude: 12.876702,
            longitude: 77.5952084
        },
        status: "red"
    },
    {
        id: "ts-11271693401",
        name: "Signal 861",
        location: {
            latitude: 12.8764408,
            longitude: 77.595029
        },
        status: "green"
    },
    {
        id: "ts-11271693402",
        name: "Signal 862",
        location: {
            latitude: 12.8764668,
            longitude: 77.5952739
        },
        status: "green"
    },
    {
        id: "ts-11283488131",
        name: "Signal 863",
        location: {
            latitude: 12.9766324,
            longitude: 77.6016069
        },
        status: "green"
    },
    {
        id: "ts-11283488139",
        name: "Signal 864",
        location: {
            latitude: 12.9763882,
            longitude: 77.6017656
        },
        status: "green"
    },
    {
        id: "ts-11286303319",
        name: "Signal 865",
        location: {
            latitude: 12.9842989,
            longitude: 77.5883039
        },
        status: "green"
    },
    {
        id: "ts-11286303320",
        name: "Signal 866",
        location: {
            latitude: 12.9843935,
            longitude: 77.5878025
        },
        status: "green"
    },
    {
        id: "ts-11286303321",
        name: "Signal 867",
        location: {
            latitude: 12.9841482,
            longitude: 77.5878688
        },
        status: "green"
    },
    {
        id: "ts-11286303328",
        name: "Signal 868",
        location: {
            latitude: 12.9848597,
            longitude: 77.588458
        },
        status: "yellow"
    },
    {
        id: "ts-11286314186",
        name: "Signal 869",
        location: {
            latitude: 12.9806143,
            longitude: 77.5974086
        },
        status: "red"
    },
    {
        id: "ts-11286580549",
        name: "Signal 870",
        location: {
            latitude: 12.9718329,
            longitude: 77.6068763
        },
        status: "red"
    },
    {
        id: "ts-11295765838",
        name: "Signal 871",
        location: {
            latitude: 12.9346027,
            longitude: 77.6096758
        },
        status: "red"
    },
    {
        id: "ts-11295765843",
        name: "Signal 872",
        location: {
            latitude: 12.9346389,
            longitude: 77.6098041
        },
        status: "yellow"
    },
    {
        id: "ts-11295765844",
        name: "Signal 873",
        location: {
            latitude: 12.9348223,
            longitude: 77.6097044
        },
        status: "green"
    },
    {
        id: "ts-11302971564",
        name: "Signal 874",
        location: {
            latitude: 12.9062392,
            longitude: 77.5860071
        },
        status: "green"
    },
    {
        id: "ts-11302971565",
        name: "Signal 875",
        location: {
            latitude: 12.9061693,
            longitude: 77.5856769
        },
        status: "green"
    },
    {
        id: "ts-11302971566",
        name: "Signal 876",
        location: {
            latitude: 12.9064405,
            longitude: 77.5854734
        },
        status: "red"
    },
    {
        id: "ts-11302971567",
        name: "Signal 877",
        location: {
            latitude: 12.9066386,
            longitude: 77.585763
        },
        status: "green"
    },
    {
        id: "ts-11302992907",
        name: "Signal 878",
        location: {
            latitude: 12.9105419,
            longitude: 77.5855423
        },
        status: "green"
    },
    {
        id: "ts-11302992908",
        name: "Signal 879",
        location: {
            latitude: 12.9104702,
            longitude: 77.5858488
        },
        status: "red"
    },
    {
        id: "ts-11302992909",
        name: "Signal 880",
        location: {
            latitude: 12.910672,
            longitude: 77.5857461
        },
        status: "green"
    },
    {
        id: "ts-11302992910",
        name: "Signal 881",
        location: {
            latitude: 12.910372,
            longitude: 77.5856725
        },
        status: "red"
    },
    {
        id: "ts-11303526456",
        name: "Signal 882",
        location: {
            latitude: 12.917302,
            longitude: 77.5803332
        },
        status: "green"
    },
    {
        id: "ts-11303526457",
        name: "Signal 883",
        location: {
            latitude: 12.9170715,
            longitude: 77.5804456
        },
        status: "red"
    },
    {
        id: "ts-11303526458",
        name: "Signal 884",
        location: {
            latitude: 12.9171963,
            longitude: 77.580068
        },
        status: "red"
    },
    {
        id: "ts-11304329710",
        name: "Signal 885",
        location: {
            latitude: 12.9062682,
            longitude: 77.5920073
        },
        status: "red"
    },
    {
        id: "ts-11304329711",
        name: "Signal 886",
        location: {
            latitude: 12.9063429,
            longitude: 77.5917598
        },
        status: "green"
    },
    {
        id: "ts-11306430810",
        name: "Signal 887",
        location: {
            latitude: 12.9314859,
            longitude: 77.6138616
        },
        status: "green"
    },
    {
        id: "ts-11306430812",
        name: "Signal 888",
        location: {
            latitude: 12.9344741,
            longitude: 77.6126186
        },
        status: "green"
    },
    {
        id: "ts-11307884035",
        name: "Signal 889",
        location: {
            latitude: 12.927751,
            longitude: 77.62111
        },
        status: "green"
    },
    {
        id: "ts-11308911772",
        name: "Signal 890",
        location: {
            latitude: 12.9063055,
            longitude: 77.5783643
        },
        status: "red"
    },
    {
        id: "ts-11308911773",
        name: "Signal 891",
        location: {
            latitude: 12.9065953,
            longitude: 77.5783648
        },
        status: "green"
    },
    {
        id: "ts-11337846010",
        name: "Signal 892",
        location: {
            latitude: 12.9612389,
            longitude: 77.6358582
        },
        status: "green"
    },
    {
        id: "ts-11337846017",
        name: "Signal 893",
        location: {
            latitude: 12.9611398,
            longitude: 77.6386563
        },
        status: "green"
    },
    {
        id: "ts-11337846020",
        name: "Signal 894",
        location: {
            latitude: 12.9608367,
            longitude: 77.6386174
        },
        status: "green"
    },
    {
        id: "ts-11338711006",
        name: "Signal 895",
        location: {
            latitude: 12.9911105,
            longitude: 77.657377
        },
        status: "green"
    },
    {
        id: "ts-11342881114",
        name: "Signal 896",
        location: {
            latitude: 12.9487765,
            longitude: 77.5933239
        },
        status: "green"
    },
    {
        id: "ts-11342881131",
        name: "Signal 897",
        location: {
            latitude: 12.9486833,
            longitude: 77.5934434
        },
        status: "yellow"
    },
    {
        id: "ts-11342881132",
        name: "Signal 898",
        location: {
            latitude: 12.9489551,
            longitude: 77.5934376
        },
        status: "red"
    },
    {
        id: "ts-11342900898",
        name: "Signal 899",
        location: {
            latitude: 12.9766153,
            longitude: 77.5995169
        },
        status: "green"
    },
    {
        id: "ts-11342970532",
        name: "Signal 900",
        location: {
            latitude: 12.982868,
            longitude: 77.5971442
        },
        status: "red"
    },
    {
        id: "ts-11342975178",
        name: "Signal 901",
        location: {
            latitude: 12.9722221,
            longitude: 77.5941421
        },
        status: "green"
    },
    {
        id: "ts-11348815671",
        name: "Signal 902",
        location: {
            latitude: 12.9243786,
            longitude: 77.6181099
        },
        status: "yellow"
    },
    {
        id: "ts-11375078750",
        name: "Signal 903",
        location: {
            latitude: 12.921135,
            longitude: 77.6655496
        },
        status: "green"
    },
    {
        id: "ts-11385066517",
        name: "Signal 904",
        location: {
            latitude: 13.0303934,
            longitude: 77.6210916
        },
        status: "red"
    },
    {
        id: "ts-11390080363",
        name: "Signal 905",
        location: {
            latitude: 12.974243,
            longitude: 77.5781461
        },
        status: "green"
    },
    {
        id: "ts-11390080364",
        name: "Signal 906",
        location: {
            latitude: 12.9742899,
            longitude: 77.5783373
        },
        status: "red"
    },
    {
        id: "ts-11390114683",
        name: "Signal 907",
        location: {
            latitude: 12.9366883,
            longitude: 77.5803961
        },
        status: "red"
    },
    {
        id: "ts-11390114684",
        name: "Signal 908",
        location: {
            latitude: 12.9368023,
            longitude: 77.5797212
        },
        status: "red"
    },
    {
        id: "ts-11390114685",
        name: "Signal 909",
        location: {
            latitude: 12.9370334,
            longitude: 77.57985
        },
        status: "red"
    },
    {
        id: "ts-11399572673",
        name: "Signal 910",
        location: {
            latitude: 12.9581911,
            longitude: 77.6665548
        },
        status: "yellow"
    },
    {
        id: "ts-11399572674",
        name: "Signal 911",
        location: {
            latitude: 12.9585275,
            longitude: 77.66608
        },
        status: "red"
    },
    {
        id: "ts-11399572675",
        name: "Signal 912",
        location: {
            latitude: 12.9586591,
            longitude: 77.6664007
        },
        status: "red"
    },
    {
        id: "ts-11420343302",
        name: "Signal 913",
        location: {
            latitude: 12.9729405,
            longitude: 77.5813058
        },
        status: "green"
    },
    {
        id: "ts-11425338082",
        name: "Signal 914",
        location: {
            latitude: 12.9670512,
            longitude: 77.5946821
        },
        status: "red"
    },
    {
        id: "ts-11432080350",
        name: "Signal 915",
        location: {
            latitude: 12.9835375,
            longitude: 77.7680945
        },
        status: "yellow"
    },
    {
        id: "ts-11434604018",
        name: "Signal 916",
        location: {
            latitude: 12.9806333,
            longitude: 77.5976678
        },
        status: "green"
    },
    {
        id: "ts-11434604019",
        name: "Signal 917",
        location: {
            latitude: 12.9808254,
            longitude: 77.5975927
        },
        status: "yellow"
    },
    {
        id: "ts-11445740091",
        name: "Signal 918",
        location: {
            latitude: 13.0935038,
            longitude: 77.5825305
        },
        status: "yellow"
    },
    {
        id: "ts-11445988395",
        name: "Signal 919",
        location: {
            latitude: 13.1020685,
            longitude: 77.5861556
        },
        status: "green"
    },
    {
        id: "ts-11445988396",
        name: "Signal 920",
        location: {
            latitude: 13.1019656,
            longitude: 77.5865054
        },
        status: "red"
    },
    {
        id: "ts-11446054568",
        name: "Signal 921",
        location: {
            latitude: 13.0936169,
            longitude: 77.5824975
        },
        status: "yellow"
    },
    {
        id: "ts-11446055369",
        name: "Signal 922",
        location: {
            latitude: 13.093563,
            longitude: 77.582365
        },
        status: "green"
    },
    {
        id: "ts-11446055370",
        name: "Signal 923",
        location: {
            latitude: 13.0934478,
            longitude: 77.5824233
        },
        status: "red"
    },
    {
        id: "ts-11449172415",
        name: "Signal 924",
        location: {
            latitude: 13.0732341,
            longitude: 77.5925834
        },
        status: "green"
    },
    {
        id: "ts-11449172416",
        name: "Signal 925",
        location: {
            latitude: 13.0732288,
            longitude: 77.5925071
        },
        status: "green"
    },
    {
        id: "ts-11449172425",
        name: "Signal 926",
        location: {
            latitude: 13.0674552,
            longitude: 77.593337
        },
        status: "green"
    },
    {
        id: "ts-11449172444",
        name: "Signal 927",
        location: {
            latitude: 13.0674909,
            longitude: 77.5931995
        },
        status: "red"
    },
    {
        id: "ts-11449172454",
        name: "Signal 928",
        location: {
            latitude: 13.0672447,
            longitude: 77.5934681
        },
        status: "red"
    },
    {
        id: "ts-11449172456",
        name: "Signal 929",
        location: {
            latitude: 13.0671271,
            longitude: 77.5929388
        },
        status: "green"
    },
    {
        id: "ts-11449172458",
        name: "Signal 930",
        location: {
            latitude: 13.0671255,
            longitude: 77.5930184
        },
        status: "green"
    },
    {
        id: "ts-11449185276",
        name: "Signal 931",
        location: {
            latitude: 13.0574961,
            longitude: 77.5935371
        },
        status: "red"
    },
    {
        id: "ts-11449185279",
        name: "Signal 932",
        location: {
            latitude: 13.0571783,
            longitude: 77.5932346
        },
        status: "green"
    },
    {
        id: "ts-11449185283",
        name: "Signal 933",
        location: {
            latitude: 13.0574228,
            longitude: 77.593115
        },
        status: "green"
    },
    {
        id: "ts-11449187227",
        name: "Signal 934",
        location: {
            latitude: 13.0738237,
            longitude: 77.5929181
        },
        status: "green"
    },
    {
        id: "ts-11449187234",
        name: "Signal 935",
        location: {
            latitude: 13.081779,
            longitude: 77.5930817
        },
        status: "green"
    },
    {
        id: "ts-11464483508",
        name: "Signal 936",
        location: {
            latitude: 12.9752275,
            longitude: 77.6077865
        },
        status: "red"
    },
    {
        id: "ts-11476588184",
        name: "Signal 937",
        location: {
            latitude: 12.9117773,
            longitude: 77.6445845
        },
        status: "yellow"
    },
    {
        id: "ts-11484393853",
        name: "Signal 938",
        location: {
            latitude: 12.9124693,
            longitude: 77.6381299
        },
        status: "yellow"
    },
    {
        id: "ts-11484393854",
        name: "Signal 939",
        location: {
            latitude: 12.9123423,
            longitude: 77.6379732
        },
        status: "red"
    },
    {
        id: "ts-11484393855",
        name: "Signal 940",
        location: {
            latitude: 12.9121928,
            longitude: 77.6380532
        },
        status: "green"
    },
    {
        id: "ts-11484393856",
        name: "Signal 941",
        location: {
            latitude: 12.9122644,
            longitude: 77.6382142
        },
        status: "red"
    },
    {
        id: "ts-11493493812",
        name: "Signal 942",
        location: {
            latitude: 12.9345296,
            longitude: 77.6297801
        },
        status: "green"
    },
    {
        id: "ts-11493493813",
        name: "Signal 943",
        location: {
            latitude: 12.9343909,
            longitude: 77.6295609
        },
        status: "yellow"
    },
    {
        id: "ts-11493846396",
        name: "Signal 944",
        location: {
            latitude: 12.9399808,
            longitude: 77.6255013
        },
        status: "green"
    },
    {
        id: "ts-11494461870",
        name: "Signal 945",
        location: {
            latitude: 12.9668594,
            longitude: 77.6613966
        },
        status: "red"
    },
    {
        id: "ts-11496183648",
        name: "Signal 946",
        location: {
            latitude: 12.9678779,
            longitude: 77.6004227
        },
        status: "red"
    },
    {
        id: "ts-11497593345",
        name: "Signal 947",
        location: {
            latitude: 12.9792571,
            longitude: 77.6463891
        },
        status: "yellow"
    },
    {
        id: "ts-11497616822",
        name: "Signal 948",
        location: {
            latitude: 12.9702092,
            longitude: 77.6414153
        },
        status: "green"
    },
    {
        id: "ts-11497616823",
        name: "Signal 949",
        location: {
            latitude: 12.9702377,
            longitude: 77.6411361
        },
        status: "red"
    },
    {
        id: "ts-11533595485",
        name: "Signal 950",
        location: {
            latitude: 12.9240761,
            longitude: 77.6518602
        },
        status: "green"
    },
    {
        id: "ts-11554370593",
        name: "Signal 951",
        location: {
            latitude: 13.0340623,
            longitude: 77.5685777
        },
        status: "red"
    },
    {
        id: "ts-11584555915",
        name: "Signal 952",
        location: {
            latitude: 13.0040723,
            longitude: 77.6195617
        },
        status: "yellow"
    },
    {
        id: "ts-11584555916",
        name: "Signal 953",
        location: {
            latitude: 13.0040287,
            longitude: 77.619752
        },
        status: "red"
    },
    {
        id: "ts-11618263383",
        name: "Signal 954",
        location: {
            latitude: 12.889722,
            longitude: 77.5636469
        },
        status: "red"
    },
    {
        id: "ts-11630611676",
        name: "Signal 955",
        location: {
            latitude: 12.9807039,
            longitude: 77.6565361
        },
        status: "yellow"
    },
    {
        id: "ts-11630611677",
        name: "Signal 956",
        location: {
            latitude: 12.9805451,
            longitude: 77.6563683
        },
        status: "green"
    },
    {
        id: "ts-11630611678",
        name: "Signal 957",
        location: {
            latitude: 12.9806621,
            longitude: 77.6562813
        },
        status: "green"
    },
    {
        id: "ts-11639971012",
        name: "Signal 958",
        location: {
            latitude: 12.9557988,
            longitude: 77.6915576
        },
        status: "yellow"
    },
    {
        id: "ts-11684233293",
        name: "Signal 959",
        location: {
            latitude: 12.9819655,
            longitude: 77.5948833
        },
        status: "red"
    },
    {
        id: "ts-11684233294",
        name: "Signal 960",
        location: {
            latitude: 12.9817732,
            longitude: 77.594506
        },
        status: "red"
    },
    {
        id: "ts-11684233295",
        name: "Signal 961",
        location: {
            latitude: 12.9817996,
            longitude: 77.5949523
        },
        status: "green"
    },
    {
        id: "ts-11688203993",
        name: "Signal 962",
        location: {
            latitude: 12.9128425,
            longitude: 77.4850607
        },
        status: "red"
    },
    {
        id: "ts-11688206890",
        name: "Signal 963",
        location: {
            latitude: 12.9543944,
            longitude: 77.5439959
        },
        status: "red"
    },
    {
        id: "ts-11688206893",
        name: "Signal 964",
        location: {
            latitude: 12.955877,
            longitude: 77.5463219
        },
        status: "green"
    },
    {
        id: "ts-11688206894",
        name: "Signal 965",
        location: {
            latitude: 12.9560434,
            longitude: 77.5461753
        },
        status: "green"
    },
    {
        id: "ts-11690829652",
        name: "Signal 966",
        location: {
            latitude: 13.0182871,
            longitude: 77.5578156
        },
        status: "green"
    },
    {
        id: "ts-11707451093",
        name: "Signal 967",
        location: {
            latitude: 12.9655368,
            longitude: 77.6175137
        },
        status: "green"
    },
    {
        id: "ts-11707451095",
        name: "Signal 968",
        location: {
            latitude: 12.9653456,
            longitude: 77.618003
        },
        status: "green"
    },
    {
        id: "ts-11707460670",
        name: "Signal 969",
        location: {
            latitude: 12.9714495,
            longitude: 77.6192838
        },
        status: "red"
    },
    {
        id: "ts-11727973845",
        name: "Signal 970",
        location: {
            latitude: 12.9584255,
            longitude: 77.5189319
        },
        status: "green"
    },
    {
        id: "ts-11727973847",
        name: "Signal 971",
        location: {
            latitude: 12.9579113,
            longitude: 77.5187262
        },
        status: "yellow"
    },
    {
        id: "ts-11780306882",
        name: "Signal 972",
        location: {
            latitude: 12.9460702,
            longitude: 77.6401606
        },
        status: "green"
    },
    {
        id: "ts-11780306883",
        name: "Signal 973",
        location: {
            latitude: 12.9459778,
            longitude: 77.6399778
        },
        status: "red"
    },
    {
        id: "ts-11780319174",
        name: "Signal 974",
        location: {
            latitude: 12.9634406,
            longitude: 77.6414906
        },
        status: "green"
    },
    {
        id: "ts-11780319175",
        name: "Signal 975",
        location: {
            latitude: 12.9632648,
            longitude: 77.6415811
        },
        status: "green"
    },
    {
        id: "ts-11780319176",
        name: "Signal 976",
        location: {
            latitude: 12.9634624,
            longitude: 77.641671
        },
        status: "red"
    },
    {
        id: "ts-11795755981",
        name: "Signal 977",
        location: {
            latitude: 12.9121758,
            longitude: 77.5673692
        },
        status: "green"
    },
    {
        id: "ts-11801662688",
        name: "Signal 978",
        location: {
            latitude: 12.9870368,
            longitude: 77.6483325
        },
        status: "green"
    },
    {
        id: "ts-11801662689",
        name: "Signal 979",
        location: {
            latitude: 12.9871282,
            longitude: 77.648087
        },
        status: "red"
    },
    {
        id: "ts-11824558258",
        name: "Signal 980",
        location: {
            latitude: 12.8796663,
            longitude: 77.5454345
        },
        status: "red"
    },
    {
        id: "ts-11824558264",
        name: "Signal 981",
        location: {
            latitude: 12.8796365,
            longitude: 77.5457258
        },
        status: "green"
    },
    {
        id: "ts-11841864043",
        name: "Signal 982",
        location: {
            latitude: 13.0019156,
            longitude: 77.6119418
        },
        status: "red"
    },
    {
        id: "ts-11843210612",
        name: "Signal 983",
        location: {
            latitude: 13.0189077,
            longitude: 77.5575794
        },
        status: "green"
    },
    {
        id: "ts-11846247779",
        name: "Signal 984",
        location: {
            latitude: 12.9040174,
            longitude: 77.5106752
        },
        status: "green"
    },
    {
        id: "ts-11846423573",
        name: "Signal 985",
        location: {
            latitude: 12.9217167,
            longitude: 77.5604202
        },
        status: "green"
    },
    {
        id: "ts-11853406315",
        name: "Signal 986",
        location: {
            latitude: 12.9970673,
            longitude: 77.6144449
        },
        status: "red"
    },
    {
        id: "ts-11853576386",
        name: "Signal 987",
        location: {
            latitude: 12.9958461,
            longitude: 77.6133543
        },
        status: "red"
    },
    {
        id: "ts-11854316025",
        name: "Signal 988",
        location: {
            latitude: 12.970468,
            longitude: 77.6101341
        },
        status: "green"
    },
    {
        id: "ts-11856705103",
        name: "Signal 989",
        location: {
            latitude: 12.9959298,
            longitude: 77.617187
        },
        status: "green"
    },
    {
        id: "ts-11856705104",
        name: "Signal 990",
        location: {
            latitude: 12.9960154,
            longitude: 77.6169707
        },
        status: "red"
    },
    {
        id: "ts-11856705121",
        name: "Signal 991",
        location: {
            latitude: 12.9915694,
            longitude: 77.6146079
        },
        status: "green"
    },
    {
        id: "ts-11856875807",
        name: "Signal 992",
        location: {
            latitude: 12.9906965,
            longitude: 77.6137921
        },
        status: "green"
    },
    {
        id: "ts-11856875821",
        name: "Signal 993",
        location: {
            latitude: 12.9904893,
            longitude: 77.6140447
        },
        status: "yellow"
    },
    {
        id: "ts-11856875822",
        name: "Signal 994",
        location: {
            latitude: 12.9904468,
            longitude: 77.6138361
        },
        status: "yellow"
    },
    {
        id: "ts-11857026800",
        name: "Signal 995",
        location: {
            latitude: 12.991786,
            longitude: 77.6143869
        },
        status: "green"
    },
    {
        id: "ts-11860340624",
        name: "Signal 996",
        location: {
            latitude: 12.9546805,
            longitude: 77.6799598
        },
        status: "green"
    },
    {
        id: "ts-11860340625",
        name: "Signal 997",
        location: {
            latitude: 12.9544524,
            longitude: 77.6800391
        },
        status: "yellow"
    },
    {
        id: "ts-11860340626",
        name: "Signal 998",
        location: {
            latitude: 12.9546555,
            longitude: 77.6797301
        },
        status: "yellow"
    },
    {
        id: "ts-11890611421",
        name: "Signal 999",
        location: {
            latitude: 12.9518999,
            longitude: 77.4996639
        },
        status: "red"
    },
    {
        id: "ts-11898236318",
        name: "Signal 1000",
        location: {
            latitude: 13.0085304,
            longitude: 77.5710906
        },
        status: "green"
    },
    {
        id: "ts-11898236319",
        name: "Signal 1001",
        location: {
            latitude: 13.0084702,
            longitude: 77.5711978
        },
        status: "green"
    },
    {
        id: "ts-11898247208",
        name: "Signal 1002",
        location: {
            latitude: 13.0085805,
            longitude: 77.5692416
        },
        status: "green"
    },
    {
        id: "ts-11898247210",
        name: "Signal 1003",
        location: {
            latitude: 13.0086264,
            longitude: 77.5690533
        },
        status: "yellow"
    },
    {
        id: "ts-11898860862",
        name: "Signal 1004",
        location: {
            latitude: 12.9970827,
            longitude: 77.5694461
        },
        status: "red"
    },
    {
        id: "ts-11898868422",
        name: "Signal 1005",
        location: {
            latitude: 12.9992744,
            longitude: 77.5712855
        },
        status: "green"
    },
    {
        id: "ts-11898958122",
        name: "Signal 1006",
        location: {
            latitude: 12.993416,
            longitude: 77.5713693
        },
        status: "green"
    },
    {
        id: "ts-11927462279",
        name: "Signal 1007",
        location: {
            latitude: 12.9070089,
            longitude: 77.62858
        },
        status: "green"
    },
    {
        id: "ts-11933333316",
        name: "Signal 1008",
        location: {
            latitude: 13.0452743,
            longitude: 77.5565269
        },
        status: "red"
    },
    {
        id: "ts-11937539311",
        name: "Signal 1009",
        location: {
            latitude: 12.883344,
            longitude: 77.5485572
        },
        status: "green"
    },
    {
        id: "ts-11937539312",
        name: "Signal 1010",
        location: {
            latitude: 12.8835013,
            longitude: 77.5484029
        },
        status: "green"
    },
    {
        id: "ts-11954211369",
        name: "Signal 1011",
        location: {
            latitude: 13.0431453,
            longitude: 77.5900332
        },
        status: "green"
    },
    {
        id: "ts-11954212343",
        name: "Signal 1012",
        location: {
            latitude: 13.0145801,
            longitude: 77.5836796
        },
        status: "green"
    },
    {
        id: "ts-11955000938",
        name: "Signal 1013",
        location: {
            latitude: 12.9061379,
            longitude: 77.5949917
        },
        status: "red"
    },
    {
        id: "ts-11955000939",
        name: "Signal 1014",
        location: {
            latitude: 12.9063876,
            longitude: 77.5949246
        },
        status: "yellow"
    },
    {
        id: "ts-11964711937",
        name: "Gorguntepalaya Cross",
        location: {
            latitude: 13.0291115,
            longitude: 77.5401527
        },
        status: "green"
    },
    {
        id: "ts-12000425037",
        name: "Signal 1016",
        location: {
            latitude: 12.9480548,
            longitude: 77.5797907
        },
        status: "red"
    },
    {
        id: "ts-12000425038",
        name: "Signal 1017",
        location: {
            latitude: 12.947975,
            longitude: 77.5799438
        },
        status: "red"
    },
    {
        id: "ts-12000425044",
        name: "Signal 1018",
        location: {
            latitude: 12.9485201,
            longitude: 77.5801684
        },
        status: "green"
    },
    {
        id: "ts-12000425045",
        name: "Signal 1019",
        location: {
            latitude: 12.9485887,
            longitude: 77.5800497
        },
        status: "green"
    },
    {
        id: "ts-12000643122",
        name: "Signal 1020",
        location: {
            latitude: 12.9480734,
            longitude: 77.5701207
        },
        status: "green"
    },
    {
        id: "ts-12000643123",
        name: "Signal 1021",
        location: {
            latitude: 12.9483657,
            longitude: 77.5701099
        },
        status: "yellow"
    },
    {
        id: "ts-12006313287",
        name: "Signal 1022",
        location: {
            latitude: 13.0090033,
            longitude: 77.5631556
        },
        status: "red"
    },
    {
        id: "ts-12006381703",
        name: "Signal 1023",
        location: {
            latitude: 12.9750927,
            longitude: 77.6255063
        },
        status: "green"
    },
    {
        id: "ts-12040922852",
        name: "Signal 1024",
        location: {
            latitude: 12.88855,
            longitude: 77.6728596
        },
        status: "green"
    },
    {
        id: "ts-12059785431",
        name: "Signal 1025",
        location: {
            latitude: 12.9220441,
            longitude: 77.5602909
        },
        status: "green"
    },
    {
        id: "ts-12059785432",
        name: "Signal 1026",
        location: {
            latitude: 12.9219797,
            longitude: 77.5600956
        },
        status: "red"
    },
    {
        id: "ts-12059868183",
        name: "Signal 1027",
        location: {
            latitude: 13.0305986,
            longitude: 77.5370762
        },
        status: "red"
    },
    {
        id: "ts-12059868184",
        name: "Signal 1028",
        location: {
            latitude: 13.0302862,
            longitude: 77.5373291
        },
        status: "red"
    },
    {
        id: "ts-12060569557",
        name: "Signal 1029",
        location: {
            latitude: 12.9279735,
            longitude: 77.5462087
        },
        status: "green"
    },
    {
        id: "ts-12060592381",
        name: "Signal 1030",
        location: {
            latitude: 12.9254845,
            longitude: 77.5498815
        },
        status: "green"
    },
    {
        id: "ts-12060592382",
        name: "Signal 1031",
        location: {
            latitude: 12.925251,
            longitude: 77.5498857
        },
        status: "red"
    },
    {
        id: "ts-12060646306",
        name: "Signal 1032",
        location: {
            latitude: 12.9126294,
            longitude: 77.5671365
        },
        status: "green"
    },
    {
        id: "ts-12060646307",
        name: "Signal 1033",
        location: {
            latitude: 12.9126932,
            longitude: 77.5672857
        },
        status: "yellow"
    },
    {
        id: "ts-12060861674",
        name: "Signal 1034",
        location: {
            latitude: 12.9394858,
            longitude: 77.6954711
        },
        status: "green"
    },
    {
        id: "ts-12060861675",
        name: "Signal 1035",
        location: {
            latitude: 12.9393289,
            longitude: 77.6949241
        },
        status: "green"
    },
    {
        id: "ts-12062818309",
        name: "Signal 1036",
        location: {
            latitude: 12.9548761,
            longitude: 77.5800114
        },
        status: "red"
    },
    {
        id: "ts-12064311431",
        name: "Signal 1037",
        location: {
            latitude: 13.0063105,
            longitude: 77.5789135
        },
        status: "green"
    },
    {
        id: "ts-12068481099",
        name: "Signal 1038",
        location: {
            latitude: 12.9900793,
            longitude: 77.550839
        },
        status: "red"
    },
    {
        id: "ts-12068481101",
        name: "Signal 1039",
        location: {
            latitude: 12.9901318,
            longitude: 77.5504785
        },
        status: "yellow"
    },
    {
        id: "ts-12068481103",
        name: "Signal 1040",
        location: {
            latitude: 12.9877604,
            longitude: 77.5497691
        },
        status: "red"
    },
    {
        id: "ts-12068481105",
        name: "National Public School Circle",
        location: {
            latitude: 12.9843867,
            longitude: 77.5488549
        },
        status: "green"
    },
    {
        id: "ts-12068481130",
        name: "Signal 1042",
        location: {
            latitude: 13.0038943,
            longitude: 77.5489101
        },
        status: "red"
    },
    {
        id: "ts-12073881083",
        name: "Signal 1043",
        location: {
            latitude: 12.8892473,
            longitude: 77.6402197
        },
        status: "green"
    },
    {
        id: "ts-12074449280",
        name: "Signal 1044",
        location: {
            latitude: 12.9245863,
            longitude: 77.6283639
        },
        status: "red"
    },
    {
        id: "ts-12074449281",
        name: "Signal 1045",
        location: {
            latitude: 12.9246574,
            longitude: 77.6283474
        },
        status: "red"
    },
    {
        id: "ts-12074449291",
        name: "Signal 1046",
        location: {
            latitude: 12.9244249,
            longitude: 77.6284461
        },
        status: "red"
    },
    {
        id: "ts-12074449292",
        name: "Signal 1047",
        location: {
            latitude: 12.9241089,
            longitude: 77.6291454
        },
        status: "red"
    },
    {
        id: "ts-12075650280",
        name: "Signal 1048",
        location: {
            latitude: 13.0100972,
            longitude: 77.5907627
        },
        status: "green"
    },
    {
        id: "ts-12077171239",
        name: "Signal 1049",
        location: {
            latitude: 12.9551212,
            longitude: 77.5802666
        },
        status: "red"
    },
    {
        id: "ts-12077171240",
        name: "Signal 1050",
        location: {
            latitude: 12.9552853,
            longitude: 77.5797627
        },
        status: "green"
    },
    {
        id: "ts-12077171241",
        name: "Signal 1051",
        location: {
            latitude: 12.9551115,
            longitude: 77.5797404
        },
        status: "red"
    },
    {
        id: "ts-12101720464",
        name: "Signal 1052",
        location: {
            latitude: 12.9653002,
            longitude: 77.6007697
        },
        status: "green"
    },
    {
        id: "ts-12107761086",
        name: "Thippasandra Cross",
        location: {
            latitude: 12.9731923,
            longitude: 77.6469751
        },
        status: "red"
    },
    {
        id: "ts-12107776959",
        name: "Signal 1054",
        location: {
            latitude: 12.9690153,
            longitude: 77.647706
        },
        status: "green"
    },
    {
        id: "ts-12110804691",
        name: "Signal 1055",
        location: {
            latitude: 12.9540118,
            longitude: 77.5852842
        },
        status: "green"
    },
    {
        id: "ts-12110823225",
        name: "Signal 1056",
        location: {
            latitude: 12.9517241,
            longitude: 77.5901998
        },
        status: "green"
    },
    {
        id: "ts-12110823226",
        name: "Signal 1057",
        location: {
            latitude: 12.9513994,
            longitude: 77.5908495
        },
        status: "red"
    },
    {
        id: "ts-12110823227",
        name: "Signal 1058",
        location: {
            latitude: 12.9518529,
            longitude: 77.59067
        },
        status: "green"
    },
    {
        id: "ts-12111889685",
        name: "Signal 1059",
        location: {
            latitude: 12.9659126,
            longitude: 77.5865612
        },
        status: "green"
    },
    {
        id: "ts-12111944876",
        name: "Signal 1060",
        location: {
            latitude: 12.9714749,
            longitude: 77.6584665
        },
        status: "red"
    },
    {
        id: "ts-12120691271",
        name: "Signal 1061",
        location: {
            latitude: 12.9707677,
            longitude: 77.6048693
        },
        status: "green"
    },
    {
        id: "ts-12120691272",
        name: "Signal 1062",
        location: {
            latitude: 12.9708359,
            longitude: 77.6046571
        },
        status: "red"
    },
    {
        id: "ts-12123536071",
        name: "Signal 1063",
        location: {
            latitude: 12.980811,
            longitude: 77.5745237
        },
        status: "red"
    },
    {
        id: "ts-12123831581",
        name: "Signal 1064",
        location: {
            latitude: 12.9199361,
            longitude: 77.5804419
        },
        status: "yellow"
    },
    {
        id: "ts-12123831582",
        name: "Signal 1065",
        location: {
            latitude: 12.9200308,
            longitude: 77.5803126
        },
        status: "green"
    },
    {
        id: "ts-12123831583",
        name: "Signal 1066",
        location: {
            latitude: 12.9198372,
            longitude: 77.5802082
        },
        status: "green"
    },
    {
        id: "ts-12123831584",
        name: "Signal 1067",
        location: {
            latitude: 12.9199448,
            longitude: 77.5800604
        },
        status: "red"
    },
    {
        id: "ts-12128921374",
        name: "Signal 1068",
        location: {
            latitude: 12.9634942,
            longitude: 77.5892656
        },
        status: "green"
    },
    {
        id: "ts-12128943114",
        name: "Signal 1069",
        location: {
            latitude: 12.9674864,
            longitude: 77.588418
        },
        status: "green"
    },
    {
        id: "ts-12134062487",
        name: "Signal 1070",
        location: {
            latitude: 12.9733255,
            longitude: 77.581299
        },
        status: "red"
    },
    {
        id: "ts-12134224864",
        name: "Signal 1071",
        location: {
            latitude: 12.9557817,
            longitude: 77.6919012
        },
        status: "red"
    },
    {
        id: "ts-12134224865",
        name: "Signal 1072",
        location: {
            latitude: 12.9559391,
            longitude: 77.6917859
        },
        status: "red"
    },
    {
        id: "ts-12135211600",
        name: "Signal 1073",
        location: {
            latitude: 12.9895265,
            longitude: 77.592954
        },
        status: "red"
    },
    {
        id: "ts-12138994485",
        name: "Signal 1074",
        location: {
            latitude: 12.9816187,
            longitude: 77.5865956
        },
        status: "green"
    },
    {
        id: "ts-12138994486",
        name: "Signal 1075",
        location: {
            latitude: 12.9818126,
            longitude: 77.5868178
        },
        status: "red"
    },
    {
        id: "ts-12139153727",
        name: "Signal 1076",
        location: {
            latitude: 12.9935192,
            longitude: 77.6075231
        },
        status: "green"
    },
    {
        id: "ts-12139153728",
        name: "Signal 1077",
        location: {
            latitude: 12.9934405,
            longitude: 77.6071815
        },
        status: "green"
    },
    {
        id: "ts-12139153743",
        name: "Signal 1078",
        location: {
            latitude: 12.9925606,
            longitude: 77.6096885
        },
        status: "red"
    },
    {
        id: "ts-12139240707",
        name: "Signal 1079",
        location: {
            latitude: 12.9804293,
            longitude: 77.5769797
        },
        status: "red"
    },
    {
        id: "ts-12144670572",
        name: "Signal 1080",
        location: {
            latitude: 12.9815091,
            longitude: 77.6228427
        },
        status: "green"
    },
    {
        id: "ts-12145344714",
        name: "Signal 1081",
        location: {
            latitude: 12.9560563,
            longitude: 77.5772254
        },
        status: "red"
    },
    {
        id: "ts-12145344737",
        name: "Signal 1082",
        location: {
            latitude: 12.9564266,
            longitude: 77.577393
        },
        status: "green"
    },
    {
        id: "ts-12145344750",
        name: "Signal 1083",
        location: {
            latitude: 12.9531695,
            longitude: 77.5738575
        },
        status: "red"
    },
    {
        id: "ts-12145344751",
        name: "Signal 1084",
        location: {
            latitude: 12.9531995,
            longitude: 77.5734741
        },
        status: "green"
    },
    {
        id: "ts-12147813610",
        name: "Signal 1085",
        location: {
            latitude: 12.9818479,
            longitude: 77.594483
        },
        status: "green"
    },
    {
        id: "ts-12147816740",
        name: "Signal 1086",
        location: {
            latitude: 12.9765511,
            longitude: 77.5995117
        },
        status: "green"
    },
    {
        id: "ts-12147929620",
        name: "Signal 1087",
        location: {
            latitude: 12.9846592,
            longitude: 77.5819139
        },
        status: "green"
    },
    {
        id: "ts-12168378213",
        name: "Signal 1088",
        location: {
            latitude: 12.93179,
            longitude: 77.6134078
        },
        status: "red"
    },
    {
        id: "ts-12168378241",
        name: "Signal 1089",
        location: {
            latitude: 12.945892,
            longitude: 77.5955215
        },
        status: "yellow"
    },
    {
        id: "ts-12169759725",
        name: "Signal 1090",
        location: {
            latitude: 12.9311704,
            longitude: 77.6953035
        },
        status: "green"
    },
    {
        id: "ts-12169759728",
        name: "Signal 1091",
        location: {
            latitude: 12.9313721,
            longitude: 77.6951192
        },
        status: "green"
    },
    {
        id: "ts-12229871103",
        name: "Signal 1092",
        location: {
            latitude: 12.9065911,
            longitude: 77.5803998
        },
        status: "green"
    },
    {
        id: "ts-12229871104",
        name: "Signal 1093",
        location: {
            latitude: 12.9062056,
            longitude: 77.5803985
        },
        status: "red"
    },
    {
        id: "ts-12291502365",
        name: "Signal 1094",
        location: {
            latitude: 13.0340501,
            longitude: 77.5685584
        },
        status: "green"
    },
    {
        id: "ts-12301590044",
        name: "Signal 1095",
        location: {
            latitude: 13.0316187,
            longitude: 77.6358413
        },
        status: "green"
    },
    {
        id: "ts-12301590045",
        name: "Signal 1096",
        location: {
            latitude: 13.0316875,
            longitude: 77.6360132
        },
        status: "green"
    },
    {
        id: "ts-12301590046",
        name: "Signal 1097",
        location: {
            latitude: 13.0317379,
            longitude: 77.6358464
        },
        status: "green"
    },
    {
        id: "ts-12301590052",
        name: "Signal 1098",
        location: {
            latitude: 13.0528885,
            longitude: 77.6459924
        },
        status: "green"
    },
    {
        id: "ts-12351736608",
        name: "Signal 1099",
        location: {
            latitude: 12.930726,
            longitude: 77.5837174
        },
        status: "green"
    },
    {
        id: "ts-12353375375",
        name: "SRS",
        location: {
            latitude: 13.0345719,
            longitude: 77.5296348
        },
        status: "red"
    },
    {
        id: "ts-12378776040",
        name: "Signal 1101",
        location: {
            latitude: 13.0057213,
            longitude: 77.5932236
        },
        status: "green"
    },
    {
        id: "ts-12378776041",
        name: "Signal 1102",
        location: {
            latitude: 13.0054678,
            longitude: 77.5932558
        },
        status: "green"
    },
    {
        id: "ts-12421958514",
        name: "Signal 1103",
        location: {
            latitude: 12.975533,
            longitude: 77.5760561
        },
        status: "green"
    },
    {
        id: "ts-12421958517",
        name: "Signal 1104",
        location: {
            latitude: 12.9754617,
            longitude: 77.5746583
        },
        status: "green"
    },
    {
        id: "ts-12421958518",
        name: "Signal 1105",
        location: {
            latitude: 12.9755377,
            longitude: 77.5748922
        },
        status: "red"
    },
    {
        id: "ts-12425345227",
        name: "Signal 1106",
        location: {
            latitude: 12.9992154,
            longitude: 77.5714022
        },
        status: "green"
    },
    {
        id: "ts-12429482558",
        name: "Signal 1107",
        location: {
            latitude: 12.9845899,
            longitude: 77.5820487
        },
        status: "green"
    },
    {
        id: "ts-12429523361",
        name: "Signal 1108",
        location: {
            latitude: 12.9599337,
            longitude: 77.5330143
        },
        status: "green"
    },
    {
        id: "ts-12429523363",
        name: "Signal 1109",
        location: {
            latitude: 12.9659569,
            longitude: 77.5353419
        },
        status: "green"
    },
    {
        id: "ts-12429523365",
        name: "Signal 1110",
        location: {
            latitude: 12.9659558,
            longitude: 77.5356817
        },
        status: "green"
    },
    {
        id: "ts-12429523369",
        name: "Signal 1111",
        location: {
            latitude: 12.9730026,
            longitude: 77.5385023
        },
        status: "green"
    },
    {
        id: "ts-12441126037",
        name: "Signal 1112",
        location: {
            latitude: 12.9879702,
            longitude: 77.5373214
        },
        status: "red"
    },
    {
        id: "ts-12441746024",
        name: "Signal 1113",
        location: {
            latitude: 12.9758188,
            longitude: 77.5386174
        },
        status: "green"
    },
    {
        id: "ts-12441746025",
        name: "Signal 1114",
        location: {
            latitude: 12.9757195,
            longitude: 77.5384055
        },
        status: "green"
    },
    {
        id: "ts-12441746026",
        name: "Signal 1115",
        location: {
            latitude: 12.975734,
            longitude: 77.5386814
        },
        status: "yellow"
    },
    {
        id: "ts-12441746027",
        name: "Signal 1116",
        location: {
            latitude: 12.9756009,
            longitude: 77.5385336
        },
        status: "red"
    },
    {
        id: "ts-12441856470",
        name: "Signal 1117",
        location: {
            latitude: 12.9808324,
            longitude: 77.5368826
        },
        status: "green"
    },
    {
        id: "ts-12441856493",
        name: "Signal 1118",
        location: {
            latitude: 12.9803916,
            longitude: 77.5370685
        },
        status: "green"
    },
    {
        id: "ts-12441867942",
        name: "Signal 1119",
        location: {
            latitude: 12.9879213,
            longitude: 77.5376171
        },
        status: "green"
    },
    {
        id: "ts-12441867995",
        name: "Signal 1120",
        location: {
            latitude: 12.9992647,
            longitude: 77.5412835
        },
        status: "green"
    },
    {
        id: "ts-12441867996",
        name: "Signal 1121",
        location: {
            latitude: 12.9992135,
            longitude: 77.5410874
        },
        status: "green"
    },
    {
        id: "ts-12441867997",
        name: "Signal 1122",
        location: {
            latitude: 12.9994211,
            longitude: 77.5409984
        },
        status: "red"
    },
    {
        id: "ts-12441867998",
        name: "Signal 1123",
        location: {
            latitude: 12.9994817,
            longitude: 77.5411392
        },
        status: "green"
    },
    {
        id: "ts-12451306646",
        name: "Signal 1124",
        location: {
            latitude: 12.9358648,
            longitude: 77.6153569
        },
        status: "green"
    },
    {
        id: "ts-12451306648",
        name: "Signal 1125",
        location: {
            latitude: 12.944004,
            longitude: 77.6077626
        },
        status: "yellow"
    },
    {
        id: "ts-12452734629",
        name: "Signal 1126",
        location: {
            latitude: 12.9762054,
            longitude: 77.6146486
        },
        status: "green"
    },
    {
        id: "ts-12452734630",
        name: "Signal 1127",
        location: {
            latitude: 12.9764646,
            longitude: 77.6147993
        },
        status: "green"
    },
    {
        id: "ts-12459218189",
        name: "Signal 1128",
        location: {
            latitude: 12.9168636,
            longitude: 77.5967771
        },
        status: "green"
    },
    {
        id: "ts-12459218190",
        name: "Signal 1129",
        location: {
            latitude: 12.9167473,
            longitude: 77.5969502
        },
        status: "green"
    },
    {
        id: "ts-12460929659",
        name: "Signal 1130",
        location: {
            latitude: 12.968346,
            longitude: 77.6062257
        },
        status: "green"
    },
    {
        id: "ts-12462507905",
        name: "Signal 1131",
        location: {
            latitude: 12.9667589,
            longitude: 77.6086806
        },
        status: "green"
    },
    {
        id: "ts-12462507906",
        name: "Signal 1132",
        location: {
            latitude: 12.9665551,
            longitude: 77.6087772
        },
        status: "red"
    },
    {
        id: "ts-12462507966",
        name: "Signal 1133",
        location: {
            latitude: 12.9670902,
            longitude: 77.6115269
        },
        status: "red"
    },
    {
        id: "ts-12466459946",
        name: "Signal 1134",
        location: {
            latitude: 12.9622087,
            longitude: 77.5760105
        },
        status: "green"
    },
    {
        id: "ts-12466459959",
        name: "Signal 1135",
        location: {
            latitude: 12.9591296,
            longitude: 77.5776537
        },
        status: "red"
    },
    {
        id: "ts-12466459977",
        name: "Signal 1136",
        location: {
            latitude: 12.9586617,
            longitude: 77.5776465
        },
        status: "green"
    },
    {
        id: "ts-12466459995",
        name: "Signal 1137",
        location: {
            latitude: 12.9596981,
            longitude: 77.5747418
        },
        status: "red"
    },
    {
        id: "ts-12466459996",
        name: "Signal 1138",
        location: {
            latitude: 12.9598301,
            longitude: 77.574386
        },
        status: "green"
    },
    {
        id: "ts-12466460042",
        name: "Signal 1139",
        location: {
            latitude: 12.9588299,
            longitude: 77.577775
        },
        status: "yellow"
    },
    {
        id: "ts-12466639117",
        name: "Signal 1140",
        location: {
            latitude: 12.9955586,
            longitude: 77.6019402
        },
        status: "red"
    },
    {
        id: "ts-12492308046",
        name: "Signal 1141",
        location: {
            latitude: 12.9168772,
            longitude: 77.5857882
        },
        status: "green"
    },
    {
        id: "ts-12492308047",
        name: "Signal 1142",
        location: {
            latitude: 12.9169731,
            longitude: 77.5859401
        },
        status: "green"
    },
    {
        id: "ts-12492308048",
        name: "Signal 1143",
        location: {
            latitude: 12.917096,
            longitude: 77.5857177
        },
        status: "green"
    },
    {
        id: "ts-12492308147",
        name: "Signal 1144",
        location: {
            latitude: 12.9169038,
            longitude: 77.5949408
        },
        status: "red"
    },
    {
        id: "ts-12492308150",
        name: "Signal 1145",
        location: {
            latitude: 12.9167892,
            longitude: 77.5952352
        },
        status: "green"
    },
    {
        id: "ts-12492427237",
        name: "Signal 1146",
        location: {
            latitude: 12.9331686,
            longitude: 77.5839149
        },
        status: "green"
    },
    {
        id: "ts-12492427238",
        name: "Signal 1147",
        location: {
            latitude: 12.9328235,
            longitude: 77.583907
        },
        status: "green"
    },
    {
        id: "ts-12492427239",
        name: "Signal 1148",
        location: {
            latitude: 12.9331704,
            longitude: 77.5837185
        },
        status: "green"
    },
    {
        id: "ts-12492427329",
        name: "Signal 1149",
        location: {
            latitude: 12.9285856,
            longitude: 77.5862753
        },
        status: "green"
    },
    {
        id: "ts-12492427330",
        name: "Signal 1150",
        location: {
            latitude: 12.9284358,
            longitude: 77.5861041
        },
        status: "green"
    },
    {
        id: "ts-12492427331",
        name: "Signal 1151",
        location: {
            latitude: 12.9287629,
            longitude: 77.5860565
        },
        status: "red"
    },
    {
        id: "ts-12492427356",
        name: "Signal 1152",
        location: {
            latitude: 12.9262944,
            longitude: 77.5858301
        },
        status: "red"
    },
    {
        id: "ts-12492427357",
        name: "Signal 1153",
        location: {
            latitude: 12.9262931,
            longitude: 77.5861399
        },
        status: "red"
    },
    {
        id: "ts-12492427358",
        name: "Signal 1154",
        location: {
            latitude: 12.9263884,
            longitude: 77.5860974
        },
        status: "red"
    },
    {
        id: "ts-12492427359",
        name: "Signal 1155",
        location: {
            latitude: 12.9261937,
            longitude: 77.5859531
        },
        status: "red"
    },
    {
        id: "ts-12495143479",
        name: "Signal 1156",
        location: {
            latitude: 12.943703,
            longitude: 77.5739828
        },
        status: "green"
    },
    {
        id: "ts-12507214356",
        name: "Signal 1157",
        location: {
            latitude: 12.9845262,
            longitude: 77.5539642
        },
        status: "green"
    },
    {
        id: "ts-12507214357",
        name: "Signal 1158",
        location: {
            latitude: 12.984628,
            longitude: 77.5541702
        },
        status: "red"
    },
    {
        id: "ts-12507214358",
        name: "Signal 1159",
        location: {
            latitude: 12.9842992,
            longitude: 77.5541471
        },
        status: "red"
    },
    {
        id: "ts-12507214389",
        name: "Signal 1160",
        location: {
            latitude: 12.9879583,
            longitude: 77.5500845
        },
        status: "green"
    },
    {
        id: "ts-12508633833",
        name: "Signal 1161",
        location: {
            latitude: 12.8741663,
            longitude: 77.5406608
        },
        status: "red"
    },
    {
        id: "ts-12525432701",
        name: "Signal 1162",
        location: {
            latitude: 12.9437981,
            longitude: 77.5800905
        },
        status: "green"
    },
    {
        id: "ts-12531369249",
        name: "Signal 1163",
        location: {
            latitude: 13.004233,
            longitude: 77.553685
        },
        status: "red"
    },
    {
        id: "ts-12531369253",
        name: "Signal 1164",
        location: {
            latitude: 13.0044046,
            longitude: 77.5538909
        },
        status: "red"
    },
    {
        id: "ts-12531390543",
        name: "Signal 1165",
        location: {
            latitude: 12.9749943,
            longitude: 77.6252084
        },
        status: "green"
    },
    {
        id: "ts-12538092507",
        name: "Signal 1166",
        location: {
            latitude: 12.981684,
            longitude: 77.6311703
        },
        status: "red"
    },
    {
        id: "ts-12538092508",
        name: "Signal 1167",
        location: {
            latitude: 12.9816825,
            longitude: 77.6315592
        },
        status: "green"
    },
    {
        id: "ts-12538092510",
        name: "Signal 1168",
        location: {
            latitude: 12.9784575,
            longitude: 77.6285024
        },
        status: "red"
    },
    {
        id: "ts-12538710575",
        name: "Signal 1169",
        location: {
            latitude: 12.959504,
            longitude: 77.5557787
        },
        status: "red"
    },
    {
        id: "ts-12550783780",
        name: "Signal 1170",
        location: {
            latitude: 12.9665848,
            longitude: 77.6139004
        },
        status: "green"
    },
    {
        id: "ts-12550784915",
        name: "Signal 1171",
        location: {
            latitude: 12.9664228,
            longitude: 77.6139532
        },
        status: "green"
    },
    {
        id: "ts-12551629147",
        name: "Signal 1172",
        location: {
            latitude: 12.9971273,
            longitude: 77.6699698
        },
        status: "red"
    },
    {
        id: "ts-12580905278",
        name: "Signal 1173",
        location: {
            latitude: 12.9369585,
            longitude: 77.575426
        },
        status: "red"
    },
    {
        id: "ts-12580905279",
        name: "Signal 1174",
        location: {
            latitude: 12.9367945,
            longitude: 77.5755298
        },
        status: "red"
    },
    {
        id: "ts-12580905291",
        name: "Signal 1175",
        location: {
            latitude: 12.9405756,
            longitude: 77.574036
        },
        status: "red"
    },
    {
        id: "ts-12580905293",
        name: "Signal 1176",
        location: {
            latitude: 12.9398731,
            longitude: 77.57381
        },
        status: "red"
    },
    {
        id: "ts-12607355194",
        name: "Sumanahalli Junction",
        location: {
            latitude: 12.9870648,
            longitude: 77.5198981
        },
        status: "green"
    },
    {
        id: "ts-12609390302",
        name: "Signal 1178",
        location: {
            latitude: 12.9667571,
            longitude: 77.5873702
        },
        status: "red"
    },
    {
        id: "ts-12611782068",
        name: "Signal 1179",
        location: {
            latitude: 12.911913,
            longitude: 77.6491125
        },
        status: "green"
    },
    {
        id: "ts-12611782069",
        name: "Signal 1180",
        location: {
            latitude: 12.9119103,
            longitude: 77.6489485
        },
        status: "red"
    },
    {
        id: "ts-12611782070",
        name: "Signal 1181",
        location: {
            latitude: 12.9117901,
            longitude: 77.6490604
        },
        status: "green"
    },
    {
        id: "ts-12611782071",
        name: "Signal 1182",
        location: {
            latitude: 12.9120294,
            longitude: 77.6490297
        },
        status: "red"
    },
    {
        id: "ts-12611782072",
        name: "Signal 1183",
        location: {
            latitude: 12.9124071,
            longitude: 77.6325384
        },
        status: "green"
    },
    {
        id: "ts-12611782073",
        name: "Signal 1184",
        location: {
            latitude: 12.9125652,
            longitude: 77.6324581
        },
        status: "green"
    },
    {
        id: "ts-12611782074",
        name: "Signal 1185",
        location: {
            latitude: 12.9123323,
            longitude: 77.6324158
        },
        status: "red"
    },
    {
        id: "ts-12611782078",
        name: "Signal 1186",
        location: {
            latitude: 12.9124145,
            longitude: 77.6323197
        },
        status: "green"
    },
    {
        id: "ts-12625079623",
        name: "Signal 1187",
        location: {
            latitude: 12.9209483,
            longitude: 77.5745401
        },
        status: "green"
    },
    {
        id: "ts-12625079624",
        name: "Signal 1188",
        location: {
            latitude: 12.9206919,
            longitude: 77.5744059
        },
        status: "yellow"
    },
    {
        id: "ts-12632101641",
        name: "Signal 1189",
        location: {
            latitude: 13.0186026,
            longitude: 77.557431
        },
        status: "green"
    },
    {
        id: "ts-12635606375",
        name: "Signal 1190",
        location: {
            latitude: 12.8949704,
            longitude: 77.5551561
        },
        status: "red"
    },
    {
        id: "ts-12666382122",
        name: "Signal 1191",
        location: {
            latitude: 12.9970462,
            longitude: 77.5732371
        },
        status: "green"
    },
    {
        id: "ts-12666382123",
        name: "Signal 1192",
        location: {
            latitude: 12.9968925,
            longitude: 77.5733669
        },
        status: "green"
    },
    {
        id: "ts-12673415800",
        name: "Signal 1193",
        location: {
            latitude: 12.9720342,
            longitude: 77.5938314
        },
        status: "green"
    },
    {
        id: "ts-12701887538",
        name: "Signal 1194",
        location: {
            latitude: 13.0040612,
            longitude: 77.7569781
        },
        status: "red"
    },
    {
        id: "ts-12759075011",
        name: "Signal 1195",
        location: {
            latitude: 12.9977837,
            longitude: 77.5509249
        },
        status: "red"
    },
    {
        id: "ts-12794940224",
        name: "Signal 1196",
        location: {
            latitude: 13.0756986,
            longitude: 77.5580338
        },
        status: "green"
    },
    {
        id: "ts-12794940257",
        name: "Signal 1197",
        location: {
            latitude: 13.0757905,
            longitude: 77.5582026
        },
        status: "green"
    },
    {
        id: "ts-12794940258",
        name: "Signal 1198",
        location: {
            latitude: 13.0758418,
            longitude: 77.5579734
        },
        status: "green"
    },
    {
        id: "ts-12794940259",
        name: "Signal 1199",
        location: {
            latitude: 13.0759022,
            longitude: 77.5581237
        },
        status: "green"
    },
    {
        id: "ts-12795275205",
        name: "Signal 1200",
        location: {
            latitude: 13.0458307,
            longitude: 77.5563058
        },
        status: "green"
    },
    {
        id: "ts-12809422086",
        name: "Signal 1201",
        location: {
            latitude: 13.0056233,
            longitude: 77.5652842
        },
        status: "green"
    },
    {
        id: "ts-12809422088",
        name: "Signal 1202",
        location: {
            latitude: 13.0057481,
            longitude: 77.5651767
        },
        status: "red"
    },
    {
        id: "ts-12809847691",
        name: "Signal 1203",
        location: {
            latitude: 13.0089494,
            longitude: 77.5630379
        },
        status: "yellow"
    },
    {
        id: "ts-12809847692",
        name: "Signal 1204",
        location: {
            latitude: 13.0088572,
            longitude: 77.5632416
        },
        status: "red"
    },
    {
        id: "ts-12809882514",
        name: "Signal 1205",
        location: {
            latitude: 13.005692,
            longitude: 77.5650171
        },
        status: "red"
    },
    {
        id: "ts-12836614945",
        name: "Elgin Junction",
        location: {
            latitude: 12.9579263,
            longitude: 77.6059698
        },
        status: "red"
    },
    {
        id: "ts-12864985110",
        name: "Elgin Junction",
        location: {
            latitude: 12.9580448,
            longitude: 77.6060624
        },
        status: "green"
    },
    {
        id: "ts-12896290428",
        name: "Signal 1208",
        location: {
            latitude: 12.9739515,
            longitude: 77.6411172
        },
        status: "yellow"
    },
    {
        id: "ts-12896290429",
        name: "Signal 1209",
        location: {
            latitude: 12.9737587,
            longitude: 77.6410393
        },
        status: "red"
    },
    {
        id: "ts-12917084190",
        name: "Signal 1210",
        location: {
            latitude: 12.9307886,
            longitude: 77.5762079
        },
        status: "red"
    },
    {
        id: "ts-12917084192",
        name: "Signal 1211",
        location: {
            latitude: 12.9307796,
            longitude: 77.5762078
        },
        status: "red"
    },
    {
        id: "ts-12943206947",
        name: "Signal 1212",
        location: {
            latitude: 12.995506,
            longitude: 77.6084716
        },
        status: "green"
    },
    {
        id: "ts-12943206948",
        name: "Signal 1213",
        location: {
            latitude: 12.9956477,
            longitude: 77.6083299
        },
        status: "green"
    },
    {
        id: "ts-12943206949",
        name: "Signal 1214",
        location: {
            latitude: 12.9956866,
            longitude: 77.6085073
        },
        status: "green"
    },
    {
        id: "ts-12943244668",
        name: "Signal 1215",
        location: {
            latitude: 12.9884663,
            longitude: 77.61712
        },
        status: "red"
    },
    {
        id: "ts-12943244669",
        name: "Signal 1216",
        location: {
            latitude: 12.9884414,
            longitude: 77.6173272
        },
        status: "green"
    },
    {
        id: "ts-12943244670",
        name: "Signal 1217",
        location: {
            latitude: 12.9886807,
            longitude: 77.6173512
        },
        status: "red"
    },
    {
        id: "ts-12943244671",
        name: "Signal 1218",
        location: {
            latitude: 12.9887217,
            longitude: 77.617177
        },
        status: "red"
    },
    {
        id: "ts-12943244681",
        name: "Signal 1219",
        location: {
            latitude: 12.9906916,
            longitude: 77.6139965
        },
        status: "green"
    },
    {
        id: "ts-12943290295",
        name: "Signal 1220",
        location: {
            latitude: 13.0225622,
            longitude: 77.6371708
        },
        status: "green"
    },
    {
        id: "ts-12943290296",
        name: "Signal 1221",
        location: {
            latitude: 13.0228247,
            longitude: 77.637018
        },
        status: "red"
    },
    {
        id: "ts-12943290297",
        name: "Signal 1222",
        location: {
            latitude: 13.0227081,
            longitude: 77.637394
        },
        status: "green"
    },
    {
        id: "ts-12943290298",
        name: "Signal 1223",
        location: {
            latitude: 13.022962,
            longitude: 77.6372619
        },
        status: "green"
    },
    {
        id: "ts-12959672447",
        name: "Signal 1224",
        location: {
            latitude: 13.0249905,
            longitude: 77.5928659
        },
        status: "red"
    },
    {
        id: "ts-12959672449",
        name: "Signal 1225",
        location: {
            latitude: 13.0249349,
            longitude: 77.5929424
        },
        status: "green"
    },
    {
        id: "ts-12961466026",
        name: "Signal 1226",
        location: {
            latitude: 12.9825764,
            longitude: 77.7582637
        },
        status: "yellow"
    },
    {
        id: "ts-12961466027",
        name: "Signal 1227",
        location: {
            latitude: 12.982372,
            longitude: 77.7582159
        },
        status: "red"
    },
    {
        id: "ts-12961466028",
        name: "Signal 1228",
        location: {
            latitude: 12.9834117,
            longitude: 77.7683358
        },
        status: "green"
    },
    {
        id: "ts-12961466029",
        name: "Signal 1229",
        location: {
            latitude: 12.9834692,
            longitude: 77.7683803
        },
        status: "red"
    },
    {
        id: "ts-12961529551",
        name: "Signal 1230",
        location: {
            latitude: 12.9774317,
            longitude: 77.7511987
        },
        status: "green"
    },
    {
        id: "ts-12961529552",
        name: "Signal 1231",
        location: {
            latitude: 12.9773138,
            longitude: 77.751279
        },
        status: "green"
    },
    {
        id: "ts-12961529553",
        name: "Signal 1232",
        location: {
            latitude: 12.9698183,
            longitude: 77.7500642
        },
        status: "green"
    },
    {
        id: "ts-12961531815",
        name: "Signal 1233",
        location: {
            latitude: 13.0041226,
            longitude: 77.7571173
        },
        status: "green"
    },
    {
        id: "ts-12961531816",
        name: "Signal 1234",
        location: {
            latitude: 13.0041769,
            longitude: 77.7569111
        },
        status: "green"
    },
    {
        id: "ts-12961531817",
        name: "Signal 1235",
        location: {
            latitude: 13.0041914,
            longitude: 77.7570404
        },
        status: "green"
    },
    {
        id: "ts-12985332606",
        name: "Signal 1236",
        location: {
            latitude: 13.028586,
            longitude: 77.5712426
        },
        status: "green"
    },
    {
        id: "ts-12985420289",
        name: "Signal 1237",
        location: {
            latitude: 12.9830891,
            longitude: 77.5601708
        },
        status: "red"
    },
    {
        id: "ts-12988102360",
        name: "Signal 1238",
        location: {
            latitude: 12.9220142,
            longitude: 77.645129
        },
        status: "green"
    },
    {
        id: "ts-12988102361",
        name: "Signal 1239",
        location: {
            latitude: 12.9218005,
            longitude: 77.6450438
        },
        status: "green"
    },
    {
        id: "ts-12988102362",
        name: "Signal 1240",
        location: {
            latitude: 12.922103,
            longitude: 77.6450577
        },
        status: "red"
    },
    {
        id: "ts-12998568324",
        name: "Signal 1241",
        location: {
            latitude: 12.9297944,
            longitude: 77.6849915
        },
        status: "red"
    },
    {
        id: "ts-12998568325",
        name: "Signal 1242",
        location: {
            latitude: 12.9295584,
            longitude: 77.6847513
        },
        status: "green"
    },
    {
        id: "ts-12998568326",
        name: "Signal 1243",
        location: {
            latitude: 12.9297323,
            longitude: 77.6843705
        },
        status: "green"
    },
    {
        id: "ts-13023127932",
        name: "Signal 1244",
        location: {
            latitude: 13.0820478,
            longitude: 77.5424452
        },
        status: "red"
    },
    {
        id: "ts-13043346080",
        name: "Signal 1245",
        location: {
            latitude: 13.0724945,
            longitude: 77.6040074
        },
        status: "red"
    },
    {
        id: "ts-13043346081",
        name: "Signal 1246",
        location: {
            latitude: 13.0725581,
            longitude: 77.6040974
        },
        status: "red"
    },
    {
        id: "ts-13043346082",
        name: "Signal 1247",
        location: {
            latitude: 13.0727113,
            longitude: 77.6040456
        },
        status: "yellow"
    },
    {
        id: "ts-13043346083",
        name: "Signal 1248",
        location: {
            latitude: 13.0726681,
            longitude: 77.6039581
        },
        status: "red"
    },
    {
        id: "ts-13058420509",
        name: "Signal 1249",
        location: {
            latitude: 12.9256836,
            longitude: 77.6251884
        },
        status: "green"
    },
    {
        id: "ts-13075780553",
        name: "Signal 1250",
        location: {
            latitude: 13.0000667,
            longitude: 77.6768288
        },
        status: "red"
    },
    {
        id: "ts-13078315932",
        name: "Signal 1251",
        location: {
            latitude: 12.9483588,
            longitude: 77.5797246
        },
        status: "green"
    },
    {
        id: "ts-13078315933",
        name: "Signal 1252",
        location: {
            latitude: 12.9370022,
            longitude: 77.580119
        },
        status: "green"
    },
    {
        id: "ts-13078315934",
        name: "Signal 1253",
        location: {
            latitude: 12.9363853,
            longitude: 77.5800225
        },
        status: "red"
    },
    {
        id: "ts-13096120948",
        name: "Signal 1254",
        location: {
            latitude: 12.8842604,
            longitude: 77.5964042
        },
        status: "green"
    },
    {
        id: "ts-13096120949",
        name: "Signal 1255",
        location: {
            latitude: 12.8842964,
            longitude: 77.59657
        },
        status: "green"
    },
    {
        id: "ts-13096120950",
        name: "Signal 1256",
        location: {
            latitude: 12.8844507,
            longitude: 77.5965124
        },
        status: "green"
    },
    {
        id: "ts-13108404164",
        name: "Signal 1257",
        location: {
            latitude: 12.9166918,
            longitude: 77.6099752
        },
        status: "yellow"
    },
    {
        id: "ts-13112165560",
        name: "Signal 1258",
        location: {
            latitude: 12.9740353,
            longitude: 77.6467738
        },
        status: "red"
    },
    {
        id: "ts-13112165561",
        name: "Signal 1259",
        location: {
            latitude: 12.973964,
            longitude: 77.646853
        },
        status: "red"
    },
    {
        id: "ts-13112165562",
        name: "Signal 1260",
        location: {
            latitude: 12.974131,
            longitude: 77.6469208
        },
        status: "green"
    },
    {
        id: "ts-13112165568",
        name: "Signal 1261",
        location: {
            latitude: 12.9785214,
            longitude: 77.6409104
        },
        status: "green"
    },
    {
        id: "ts-13127345329",
        name: "Signal 1262",
        location: {
            latitude: 12.841423,
            longitude: 77.5883243
        },
        status: "red"
    },
    {
        id: "ts-13127345330",
        name: "Signal 1263",
        location: {
            latitude: 12.8417392,
            longitude: 77.5887029
        },
        status: "red"
    },
    {
        id: "ts-13127345331",
        name: "Signal 1264",
        location: {
            latitude: 12.8412776,
            longitude: 77.5885295
        },
        status: "green"
    },
    {
        id: "ts-13127345332",
        name: "Signal 1265",
        location: {
            latitude: 12.8418234,
            longitude: 77.5885566
        },
        status: "red"
    },
    {
        id: "ts-13127415069",
        name: "Signal 1266",
        location: {
            latitude: 12.9312085,
            longitude: 77.6950202
        },
        status: "green"
    },
    {
        id: "ts-13127415070",
        name: "Signal 1267",
        location: {
            latitude: 12.9313358,
            longitude: 77.6949182
        },
        status: "green"
    },
    {
        id: "ts-13153859618",
        name: "Signal 1268",
        location: {
            latitude: 12.9556246,
            longitude: 77.5857447
        },
        status: "green"
    },
    {
        id: "ts-13153859619",
        name: "Signal 1269",
        location: {
            latitude: 12.9555637,
            longitude: 77.5855833
        },
        status: "green"
    },
    {
        id: "ts-13161545541",
        name: "Signal 1270",
        location: {
            latitude: 12.9462368,
            longitude: 77.5879167
        },
        status: "green"
    },
    {
        id: "ts-13161545542",
        name: "Signal 1271",
        location: {
            latitude: 12.9461813,
            longitude: 77.5880004
        },
        status: "red"
    },
    {
        id: "ts-13167025624",
        name: "Signal 1272",
        location: {
            latitude: 12.944194,
            longitude: 77.6027911
        },
        status: "green"
    },
    {
        id: "ts-13167025625",
        name: "Signal 1273",
        location: {
            latitude: 12.9443282,
            longitude: 77.6029976
        },
        status: "red"
    },
    {
        id: "ts-13169514757",
        name: "Signal 1274",
        location: {
            latitude: 12.9071499,
            longitude: 77.4990496
        },
        status: "yellow"
    },
    {
        id: "ts-13180113879",
        name: "Signal 1275",
        location: {
            latitude: 12.889432,
            longitude: 77.5635943
        },
        status: "red"
    },
    {
        id: "ts-13191749643",
        name: "Signal 1276",
        location: {
            latitude: 12.8904796,
            longitude: 77.5642343
        },
        status: "red"
    },
    {
        id: "ts-13191749644",
        name: "Signal 1277",
        location: {
            latitude: 12.8904008,
            longitude: 77.5642284
        },
        status: "green"
    },
    {
        id: "ts-13191749645",
        name: "Signal 1278",
        location: {
            latitude: 12.8904726,
            longitude: 77.5644797
        },
        status: "yellow"
    },
    {
        id: "ts-13243451771",
        name: "Signal 1279",
        location: {
            latitude: 12.9326232,
            longitude: 77.5162542
        },
        status: "green"
    },
    {
        id: "ts-13243451772",
        name: "Signal 1280",
        location: {
            latitude: 12.9327688,
            longitude: 77.5160243
        },
        status: "red"
    },
    {
        id: "ts-13243451773",
        name: "Signal 1281",
        location: {
            latitude: 12.9326592,
            longitude: 77.5160589
        },
        status: "green"
    },
    {
        id: "ts-13243451774",
        name: "Signal 1282",
        location: {
            latitude: 12.9327335,
            longitude: 77.5162336
        },
        status: "green"
    },
    {
        id: "ts-13245148770",
        name: "Signal 1283",
        location: {
            latitude: 12.8740304,
            longitude: 77.5409011
        },
        status: "green"
    },
    {
        id: "ts-13245148819",
        name: "Signal 1284",
        location: {
            latitude: 12.9154491,
            longitude: 77.5134319
        },
        status: "green"
    },
    {
        id: "ts-13245148821",
        name: "Signal 1285",
        location: {
            latitude: 12.9156687,
            longitude: 77.5134909
        },
        status: "green"
    },
    {
        id: "ts-13245148823",
        name: "Signal 1286",
        location: {
            latitude: 12.9155099,
            longitude: 77.513577
        },
        status: "green"
    },
    {
        id: "ts-13245148836",
        name: "Signal 1287",
        location: {
            latitude: 12.9039625,
            longitude: 77.5106774
        },
        status: "green"
    },
    {
        id: "ts-13245148837",
        name: "Signal 1288",
        location: {
            latitude: 12.9040203,
            longitude: 77.5106143
        },
        status: "red"
    },
    {
        id: "ts-13245148838",
        name: "Signal 1289",
        location: {
            latitude: 12.904021,
            longitude: 77.510814
        },
        status: "yellow"
    },
    {
        id: "ts-13245148864",
        name: "Signal 1290",
        location: {
            latitude: 12.9067994,
            longitude: 77.5210806
        },
        status: "red"
    },
    {
        id: "ts-13245148865",
        name: "Signal 1291",
        location: {
            latitude: 12.906842,
            longitude: 77.5210156
        },
        status: "red"
    },
    {
        id: "ts-13245148866",
        name: "Signal 1292",
        location: {
            latitude: 12.906858,
            longitude: 77.521161
        },
        status: "red"
    },
    {
        id: "ts-13245148867",
        name: "Signal 1293",
        location: {
            latitude: 12.9069092,
            longitude: 77.5210802
        },
        status: "red"
    },
    {
        id: "ts-13245249367",
        name: "Signal 1294",
        location: {
            latitude: 13.0568295,
            longitude: 77.5072995
        },
        status: "green"
    },
    {
        id: "ts-13245249368",
        name: "Signal 1295",
        location: {
            latitude: 13.0595771,
            longitude: 77.5070158
        },
        status: "green"
    },
    {
        id: "ts-13245249369",
        name: "Signal 1296",
        location: {
            latitude: 13.0593279,
            longitude: 77.5069233
        },
        status: "green"
    },
    {
        id: "ts-13266242070",
        name: "Signal 1297",
        location: {
            latitude: 12.9793454,
            longitude: 77.6023303
        },
        status: "red"
    },
    {
        id: "ts-13266242072",
        name: "Signal 1298",
        location: {
            latitude: 12.9790835,
            longitude: 77.6023553
        },
        status: "green"
    },
    {
        id: "ts-13343865504",
        name: "Signal 1299",
        location: {
            latitude: 12.9622978,
            longitude: 77.5943139
        },
        status: "green"
    },
    {
        id: "ts-13343865543",
        name: "Signal 1300",
        location: {
            latitude: 12.9623969,
            longitude: 77.5951378
        },
        status: "green"
    },
    {
        id: "ts-13343865544",
        name: "Signal 1301",
        location: {
            latitude: 12.9624987,
            longitude: 77.5951426
        },
        status: "red"
    },
    {
        id: "ts-13343865547",
        name: "Signal 1302",
        location: {
            latitude: 12.9624566,
            longitude: 77.595241
        },
        status: "red"
    },
    {
        id: "ts-13360511829",
        name: "Signal 1303",
        location: {
            latitude: 12.9168238,
            longitude: 77.5999127
        },
        status: "red"
    },
    {
        id: "ts-13360511830",
        name: "Signal 1304",
        location: {
            latitude: 12.9166532,
            longitude: 77.6000666
        },
        status: "yellow"
    },
    {
        id: "ts-13368863481",
        name: "Signal 1305",
        location: {
            latitude: 12.9127511,
            longitude: 77.6802159
        },
        status: "red"
    },
    {
        id: "ts-13368863482",
        name: "Signal 1306",
        location: {
            latitude: 12.9129024,
            longitude: 77.6801651
        },
        status: "red"
    },
    {
        id: "ts-13377510554",
        name: "Signal 1307",
        location: {
            latitude: 12.9134808,
            longitude: 77.6788139
        },
        status: "green"
    },
    {
        id: "ts-13377510555",
        name: "Signal 1308",
        location: {
            latitude: 12.9136285,
            longitude: 77.6787266
        },
        status: "red"
    },
    {
        id: "ts-13377674281",
        name: "Signal 1309",
        location: {
            latitude: 12.9872001,
            longitude: 77.6200135
        },
        status: "red"
    },
    {
        id: "ts-13392355626",
        name: "Signal 1310",
        location: {
            latitude: 12.9976295,
            longitude: 77.5511047
        },
        status: "red"
    },
    {
        id: "ts-13392355627",
        name: "Signal 1311",
        location: {
            latitude: 12.9977732,
            longitude: 77.5512143
        },
        status: "yellow"
    },
    {
        id: "ts-13392355632",
        name: "Signal 1312",
        location: {
            latitude: 12.9973035,
            longitude: 77.5463642
        },
        status: "yellow"
    },
    {
        id: "ts-13392355633",
        name: "Signal 1313",
        location: {
            latitude: 12.9975798,
            longitude: 77.5463728
        },
        status: "green"
    },
    {
        id: "ts-13392355634",
        name: "Signal 1314",
        location: {
            latitude: 12.9974227,
            longitude: 77.5465163
        },
        status: "green"
    },
    {
        id: "ts-13392355635",
        name: "Signal 1315",
        location: {
            latitude: 12.9975015,
            longitude: 77.5462555
        },
        status: "green"
    },
    {
        id: "ts-13396930899",
        name: "Signal 1316",
        location: {
            latitude: 12.9742212,
            longitude: 77.5749934
        },
        status: "green"
    },
    {
        id: "ts-13396930900",
        name: "Signal 1317",
        location: {
            latitude: 12.9743479,
            longitude: 77.5750736
        },
        status: "yellow"
    },
    {
        id: "ts-13397050517",
        name: "Signal 1318",
        location: {
            latitude: 12.9807285,
            longitude: 77.5769615
        },
        status: "green"
    },
    {
        id: "ts-13409937609",
        name: "Signal 1319",
        location: {
            latitude: 13.0319335,
            longitude: 77.6217622
        },
        status: "red"
    },
    {
        id: "ts-13409937610",
        name: "Signal 1320",
        location: {
            latitude: 13.032025,
            longitude: 77.6217789
        },
        status: "red"
    },
    {
        id: "ts-13409937611",
        name: "Signal 1321",
        location: {
            latitude: 13.0320388,
            longitude: 77.6218895
        },
        status: "red"
    },
    {
        id: "ts-13409937612",
        name: "Signal 1322",
        location: {
            latitude: 13.0320115,
            longitude: 77.621891
        },
        status: "green"
    },
    {
        id: "ts-13429861055",
        name: "Signal 1323",
        location: {
            latitude: 13.0365882,
            longitude: 77.5350605
        },
        status: "green"
    },
    {
        id: "ts-13429861056",
        name: "Signal 1324",
        location: {
            latitude: 13.0367936,
            longitude: 77.5350102
        },
        status: "red"
    },
    {
        id: "ts-13429861057",
        name: "Signal 1325",
        location: {
            latitude: 13.0366159,
            longitude: 77.5351797
        },
        status: "green"
    },
    {
        id: "ts-13429861058",
        name: "Signal 1326",
        location: {
            latitude: 13.0367267,
            longitude: 77.5351693
        },
        status: "green"
    },
    {
        id: "ts-13451926946",
        name: "Signal 1327",
        location: {
            latitude: 12.9738078,
            longitude: 77.6137724
        },
        status: "green"
    },
    {
        id: "ts-13451926992",
        name: "Signal 1328",
        location: {
            latitude: 12.981142,
            longitude: 77.5972281
        },
        status: "green"
    },
    {
        id: "ts-13459522647",
        name: "Signal 1329",
        location: {
            latitude: 12.9654133,
            longitude: 77.6188029
        },
        status: "red"
    },
    {
        id: "ts-13459522648",
        name: "Signal 1330",
        location: {
            latitude: 12.9654809,
            longitude: 77.6187161
        },
        status: "yellow"
    },
    {
        id: "ts-13472655798",
        name: "Signal 1331",
        location: {
            latitude: 12.9569564,
            longitude: 77.5673755
        },
        status: "green"
    },
    {
        id: "ts-13472655799",
        name: "Signal 1332",
        location: {
            latitude: 12.9571097,
            longitude: 77.5672397
        },
        status: "green"
    },
    {
        id: "ts-13472655800",
        name: "Signal 1333",
        location: {
            latitude: 12.9572445,
            longitude: 77.5673949
        },
        status: "green"
    },
    {
        id: "ts-13472659201",
        name: "Signal 1334",
        location: {
            latitude: 12.9570889,
            longitude: 77.5675514
        },
        status: "green"
    },
    {
        id: "ts-13503202473",
        name: "Signal 1335",
        location: {
            latitude: 13.0039854,
            longitude: 77.5501454
        },
        status: "red"
    },
    {
        id: "ts-13503202497",
        name: "Signal 1336",
        location: {
            latitude: 13.0040169,
            longitude: 77.5498148
        },
        status: "red"
    },
    {
        id: "ts-13514710560",
        name: "Signal 1337",
        location: {
            latitude: 12.9369735,
            longitude: 77.6015412
        },
        status: "red"
    },
    {
        id: "ts-13518615592",
        name: "Signal 1338",
        location: {
            latitude: 12.9346402,
            longitude: 77.6237113
        },
        status: "green"
    },
    {
        id: "ts-13518615593",
        name: "Signal 1339",
        location: {
            latitude: 12.9346329,
            longitude: 77.6239554
        },
        status: "red"
    },
    {
        id: "ts-13518615594",
        name: "Signal 1340",
        location: {
            latitude: 12.9345359,
            longitude: 77.6237779
        },
        status: "red"
    },
    {
        id: "ts-13598615868",
        name: "Signal 1341",
        location: {
            latitude: 12.9786431,
            longitude: 77.5426324
        },
        status: "red"
    }
];
const mockIncidents = [];
const ISSUE_TYPES = {
    trauma: 'Trauma/Accident',
    cardiac: 'Cardiac Emergency',
    respiratory: 'Respiratory Distress',
    stroke: 'Stroke',
    burn: 'Burn Injury',
    poisoning: 'Poisoning/Overdose',
    other: 'Other Emergency'
};
const SEVERITY_LEVELS = {
    critical: 'Critical - Immediate',
    high: 'High - Urgent',
    medium: 'Medium - Soon',
    low: 'Low - Stable'
};
const AMBULANCE_STATUSES = {
    idle: 'Available',
    responding: 'Responding to Scene',
    enroute: 'Enroute to Hospital',
    onsite: 'On Scene',
    transporting: 'Transporting Patient'
};
const INCIDENT_STATUSES = {
    created: 'Emergency Reported',
    allocated: 'Hospital Allocated',
    acknowledged: 'Hospital Acknowledged',
    arrived: 'Ambulance Arrived',
    completed: 'Incident Completed'
};
}),
"[project]/components/hospital/LiveCityMap.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveCityMap",
    ()=>LiveCityMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
'use client';
;
;
const LiveCityMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/hospital/LiveCityMapInner.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-[#11131a] animate-pulse rounded-lg flex items-center justify-center text-gray-500 font-bold tracking-wider relative border-2 border-slate-700 shadow-2xl",
            children: [
                "MAP LOADING...",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-4 right-4 text-white text-sm bg-black/60 px-3 py-1 rounded",
                    children: "ETA: 3 MIN"
                }, void 0, false, {
                    fileName: "[project]/components/hospital/LiveCityMap.tsx",
                    lineNumber: 16,
                    columnNumber: 233
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/hospital/LiveCityMap.tsx",
            lineNumber: 16,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0))
});
;
}),
"[project]/app/hospital/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HospitalPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swr/dist/index/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hospital$2f$LiveCityMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/hospital/LiveCityMap.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const fetcher = (url)=>fetch(url).then((res)=>res.json());
// Select a hospital for demo (in production, this would be determined by auth)
const HOSPITAL_ID = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockHospitals"][0]?.id || 'hosp-1';
function HospitalPage() {
    const [currentHospital, setCurrentHospital] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hospitalsMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Map(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockHospitals"].map((h)=>[
            h.id,
            h
        ])));
    // Fetch incidents
    const { data, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swr$2f$dist$2f$index$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])('/api/incidents', fetcher, {
        refreshInterval: 2000
    });
    const incidents = data?.incidents || [];
    // For the sake of the demo, we show any incoming incident across the city so the dashboard lights up
    const myIncidents = incidents;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Dynamically update the hospital header to match the incoming incident if one exists, otherwise default
        const activeInc = myIncidents.find((inc)=>inc.status !== 'completed');
        const targetHospitalId = activeInc ? activeInc.hospitalId : HOSPITAL_ID;
        const hospital = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockHospitals"].find((h)=>h.id === targetHospitalId);
        if (hospital) {
            setCurrentHospital(hospital);
        }
    }, [
        myIncidents
    ]);
    if (!currentHospital) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-b from-gray-50 to-white p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto text-center pt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        size: 48,
                        className: "text-yellow-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/app/hospital/page.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Hospital Not Found"
                    }, void 0, false, {
                        fileName: "[project]/app/hospital/page.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/hospital/page.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/hospital/page.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
    // Get active incidents (not completed)
    const activeIncidents = myIncidents.filter((inc)=>inc.status !== 'completed');
    const completedIncidents = myIncidents.filter((inc)=>inc.status === 'completed');
    const primaryIncident = activeIncidents[0] || null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#1b2230] text-gray-200 flex flex-col font-sans h-[100dvh] overflow-hidden selection:bg-red-500/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-6 py-4 bg-[#212838] border-b border-[#30394f] shadow-md z-10 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#0f8b8d] text-white p-2 text-xl font-bold flex items-center justify-center rounded-full shadow-[0_0_15px_rgba(15,139,141,0.5)]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/hospital/page.tsx",
                                    lineNumber: 70,
                                    columnNumber: 14
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/hospital/page.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: currentHospital.id,
                                onChange: (e)=>setCurrentHospital(hospitalsMap.get(e.target.value) || __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockHospitals"][0]),
                                className: "bg-transparent text-lg font-bold tracking-widest text-[#d8deeb] uppercase ml-1 border-none outline-none cursor-pointer hover:text-white transition-colors",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockHospitals"].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: h.id,
                                        className: "bg-[#212838] text-sm",
                                        children: h.name
                                    }, h.id, false, {
                                        fileName: "[project]/app/hospital/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/hospital/page.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/hospital/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex justify-center items-center gap-12 font-bold tracking-wider text-sm opacity-90 hidden lg:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400",
                                children: "10:30:45 AM"
                            }, void 0, false, {
                                fileName: "[project]/app/hospital/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-green-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/hospital/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 14
                                    }, this),
                                    "TOTAL EMERGENCY LOAD: HIGH"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/hospital/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/hospital/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "text-gray-400 hover:text-white transition-colors relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"
                                    }, void 0, false, {
                                        fileName: "[project]/app/hospital/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/app/hospital/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/hospital/page.tsx",
                                lineNumber: 92,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#1b2230] border border-[#3b4761] px-4 py-2 rounded font-bold text-xs tracking-wider text-gray-400 flex items-center gap-2 cursor-pointer hover:bg-[#30394f] transition-colors",
                                children: "ADMIN"
                            }, void 0, false, {
                                fileName: "[project]/app/hospital/page.tsx",
                                lineNumber: 96,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#1b2230] border border-[#3b4761] px-4 py-2 rounded font-bold text-xs tracking-wider flex items-center gap-2 cursor-pointer hover:bg-[#30394f] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "👤"
                                    }, void 0, false, {
                                        fileName: "[project]/app/hospital/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this),
                                    " ADMIN v"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/hospital/page.tsx",
                                lineNumber: 99,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/hospital/page.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/hospital/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex p-6 gap-8 overflow-hidden bg-[#22283a] relative min-h-0",
                children: [
                    primaryIncident && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-2 left-1/2 -translate-x-1/2 z-50 bg-[#c53133] text-white px-8 py-2 rounded-lg shadow-[0_0_30px_rgba(197,49,51,0.4)] border border-[#e64749] font-bold tracking-wider text-sm animate-[pulse_2s_ease-in-out_infinite] hidden lg:block uppercase",
                        children: [
                            primaryIncident.severity,
                            " ",
                            primaryIncident.issueType,
                            " CASE ARRIVING IN ",
                            Math.ceil((primaryIncident.estimatedArrivalTime || 0) / 60),
                            " MINUTES"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/hospital/page.tsx",
                        lineNumber: 110,
                        columnNumber: 12
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col h-full bg-[#1b2230] rounded-xl border border-[#30394f] overflow-hidden shadow-2xl relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 right-0 bg-gradient-to-b from-[#1b2230] to-transparent h-32 z-10 pointer-events-none p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-white tracking-widest mb-1 shadow-black drop-shadow-lg",
                                        children: "Live City Map"
                                    }, void 0, false, {
                                        fileName: "[project]/app/hospital/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-bold tracking-wider text-gray-400 space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "opacity-90",
                                                children: "TOTAL ACTIVE AMBULANCES: 7"
                                            }, void 0, false, {
                                                fileName: "[project]/app/hospital/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "opacity-90",
                                                children: "INCOMING EMERGENCY CASES: 3"
                                            }, void 0, false, {
                                                fileName: "[project]/app/hospital/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 18
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "opacity-90",
                                                children: "AVG. ARRIVAL TIME: 5 MIN"
                                            }, void 0, false, {
                                                fileName: "[project]/app/hospital/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 18
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/hospital/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/hospital/page.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-black w-full h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$hospital$2f$LiveCityMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LiveCityMap"], {
                                    hospitalLocation: currentHospital.location
                                }, void 0, false, {
                                    fileName: "[project]/app/hospital/page.tsx",
                                    lineNumber: 127,
                                    columnNumber: 16
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/hospital/page.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/hospital/page.tsx",
                        lineNumber: 116,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[480px] flex flex-col gap-6 overflow-y-auto pr-2 pb-4 shrink-0 rounded-xl relative",
                        style: {
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg tracking-wider text-white",
                                        children: "Incoming Case Monitor"
                                    }, void 0, false, {
                                        fileName: "[project]/app/hospital/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 16
                                    }, this),
                                    activeIncidents.length > 0 ? activeIncidents.map((incident)=>{
                                        const isCritical = incident.severity === 'critical';
                                        const colorClass = isCritical ? 'border-[#e84142] text-[#e84142]' : 'border-[#eab308] text-[#eab308]';
                                        const badgeClass = isCritical ? 'bg-[#4ade80] text-[#064e3b]' : 'bg-[#eab308] text-[#713f12]';
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `bg-[#191f2e] border-2 ${isCritical ? 'border-[#e84142]' : 'border-[#eab308]'} rounded-xl p-5 shadow-[0_0_15px_rgba(0,0,0,0.15)] relative overflow-hidden group transition-colors`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 right-0 p-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `font-bold text-[10px] tracking-widest px-2 py-1 rounded shadow cursor-pointer ${badgeClass}`,
                                                        children: isCritical ? 'SIREN' : `${Math.ceil((incident.estimatedArrivalTime || 0) / 60)} MIN`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/hospital/page.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 26
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 relative z-10",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-bold tracking-wider opacity-90 text-gray-300",
                                                            children: [
                                                                "AMBULANCE ID: ",
                                                                incident.ambulanceId || 'A72B'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/hospital/page.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-2 gap-2 text-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-bold tracking-wide opacity-80 uppercase",
                                                                    children: "ETA"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/hospital/page.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 32
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `font-mono font-bold text-right text-lg ${isCritical ? 'text-[#e84142]' : 'text-[#eab308]'}`,
                                                                    children: [
                                                                        "~",
                                                                        Math.ceil((incident.estimatedArrivalTime || 0) / 60),
                                                                        " MIN"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/hospital/page.tsx",
                                                                    lineNumber: 156,
                                                                    columnNumber: 32
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/hospital/page.tsx",
                                                            lineNumber: 154,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-bold tracking-wide mt-2 uppercase",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "opacity-80",
                                                                    children: "EMERGENCY LEVEL "
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/hospital/page.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 32
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: isCritical ? 'text-[#e84142]' : 'text-[#eab308]',
                                                                    children: incident.severity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/hospital/page.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 32
                                                                }, this),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "opacity-80 font-normal",
                                                                    children: [
                                                                        "(",
                                                                        incident.issueType,
                                                                        ")"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/hospital/page.tsx",
                                                                    lineNumber: 160,
                                                                    columnNumber: 126
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/hospital/page.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-bold tracking-wide pt-1 text-gray-300 text-center",
                                                            children: "WAITING FOR LIVE VITALS..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/hospital/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/hospital/page.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 26
                                                }, this)
                                            ]
                                        }, incident.id, true, {
                                            fileName: "[project]/app/hospital/page.tsx",
                                            lineNumber: 146,
                                            columnNumber: 22
                                        }, this);
                                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#191f2e] border-2 border-[#e84142] rounded-xl p-5 shadow-[0_0_15px_rgba(232,65,66,0.15)] relative overflow-hidden group hover:border-red-400 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-0 right-0 p-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#4ade80] text-[#064e3b] font-bold text-[10px] tracking-widest px-2 py-1 rounded shadow cursor-pointer",
                                                            children: "SIREN"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/hospital/page.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 24
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2 relative z-10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-bold tracking-wider opacity-90 text-gray-300",
                                                                children: "AMBULANCE ID: A72B"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/hospital/page.tsx",
                                                                lineNumber: 177,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-2 gap-2 text-sm",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "font-bold tracking-wide opacity-80 uppercase",
                                                                        children: "Distance"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/hospital/page.tsx",
                                                                        lineNumber: 179,
                                                                        columnNumber: 30
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-[#e84142] font-mono font-bold text-right text-lg",
                                                                        children: "07.15"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/hospital/page.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 30
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/hospital/page.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-bold tracking-wide mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "opacity-80",
                                                                        children: "EMERGENCY LEVEL "
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/hospital/page.tsx",
                                                                        lineNumber: 183,
                                                                        columnNumber: 30
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#e84142]",
                                                                        children: "CRITICAL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/hospital/page.tsx",
                                                                        lineNumber: 184,
                                                                        columnNumber: 30
                                                                    }, this),
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "opacity-80 font-normal",
                                                                        children: "(Cardiac)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/hospital/page.tsx",
                                                                        lineNumber: 184,
                                                                        columnNumber: 79
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/hospital/page.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-bold tracking-wide pt-1 text-gray-300 text-center",
                                                                children: "VITALS: HR 140, O2 78%, BP 60/40"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/hospital/page.tsx",
                                                                lineNumber: 186,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 24
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/hospital/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-[#191f2e] border border-[#eab308] rounded-xl p-5 shadow-[0_0_15px_rgba(234,179,8,0.1)] relative overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-0 right-0 p-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-[#eab308] text-[#713f12] font-bold text-[10px] tracking-widest px-2 py-1 rounded shadow opacity-90",
                                                            children: "3 MIN"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/hospital/page.tsx",
                                                            lineNumber: 195,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 24
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-bold tracking-wider opacity-90 text-gray-300",
                                                                children: "AMBULANCE ID: A98C"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/hospital/page.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-bold tracking-wide mt-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "opacity-80",
                                                                        children: "EMERGENCY LEVEL "
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/hospital/page.tsx",
                                                                        lineNumber: 200,
                                                                        columnNumber: 30
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#eab308]",
                                                                        children: "CRITICAL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/hospital/page.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 30
                                                                    }, this),
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "opacity-80 font-normal",
                                                                        children: "(Trauma)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/hospital/page.tsx",
                                                                        lineNumber: 201,
                                                                        columnNumber: 79
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/hospital/page.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm font-bold tracking-wide pt-1 text-gray-300 text-center",
                                                                children: "VITALS: HR 110, O2 98%, BP 90/60"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/hospital/page.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 24
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/hospital/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/hospital/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg tracking-wider text-white",
                                        children: "Resource & Capacity Monitor"
                                    }, void 0, false, {
                                        fileName: "[project]/app/hospital/page.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[#191f2e] border border-[#22c55e] border-dashed rounded-xl p-5 shadow-[0_0_15px_rgba(34,197,94,0.1)] relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 p-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-[#22c55e] text-[#064e3b] font-bold text-[10px] tracking-widest px-2 py-1 rounded shadow",
                                                    children: "YELLOW"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/hospital/page.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/hospital/page.tsx",
                                                lineNumber: 216,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-bold tracking-wider opacity-90 text-gray-300",
                                                        children: "AMBULANCE ID: A98B"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-bold tracking-wide flex justify-between items-center text-gray-300 border-b border-gray-700/50 pb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "opacity-90 uppercase",
                                                                children: "ICU Availability"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/hospital/page.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "bg-[#30394e] px-3 border border-[#44506c] rounded text-white shadow-inner font-mono",
                                                                children: "1 / 4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/hospital/page.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 221,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-bold tracking-wide flex justify-between items-center text-gray-300 pt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "opacity-90 uppercase",
                                                                children: "Operation Theatre Availability"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/hospital/page.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "opacity-80 font-mono",
                                                                children: "2 / 3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/hospital/page.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/hospital/page.tsx",
                                                lineNumber: 219,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/hospital/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/hospital/page.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 pt-2 pb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg tracking-wider text-white",
                                        children: "Resource & Capacity Monitor"
                                    }, void 0, false, {
                                        fileName: "[project]/app/hospital/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-x-6 gap-y-4 text-xs font-bold tracking-wider",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "opacity-70 uppercase",
                                                        children: "Emergency Beds:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 24
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-lg font-mono tracking-widest text-[#d8deeb]",
                                                        children: [
                                                            currentHospital.capacity.generalBeds - 8 > 0 ? currentHospital.capacity.generalBeds - 8 : 2,
                                                            " / ",
                                                            currentHospital.capacity.generalBeds
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 24
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[#eab308] uppercase text-[10px]",
                                                        children: "ETA (YELLOW)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 24
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/hospital/page.tsx",
                                                lineNumber: 238,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "opacity-70 uppercase flex justify-between items-center pr-2",
                                                        children: [
                                                            "ICU Availability:",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-white px-2 rounded font-bold shadow-md drop-shadow ${currentHospital.capacity.icuBeds < 5 ? 'bg-[#e84142] shadow-red-900/50' : 'bg-[#eab308] shadow-amber-900/50'}`,
                                                                children: currentHospital.capacity.icuBeds < 5 ? 'RED' : 'YELLOW'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/hospital/page.tsx",
                                                                lineNumber: 247,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 24
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-lg font-mono tracking-widest text-[#d8deeb]",
                                                        children: [
                                                            currentHospital.capacity.icuBeds < 5 ? '1' : '3',
                                                            " / ",
                                                            currentHospital.capacity.icuBeds
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 24
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/hospital/page.tsx",
                                                lineNumber: 244,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 col-span-2 pt-2 border-t border-gray-700/50 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "opacity-70 uppercase",
                                                        children: "ON-DUTY DOCTORS:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 24
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm tracking-wide text-[#d8deeb] font-mono leading-relaxed",
                                                        children: [
                                                            "Available Specialists: ",
                                                            currentHospital.capacity.doctors,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/app/hospital/page.tsx",
                                                                lineNumber: 257,
                                                                columnNumber: 86
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-gray-400 font-sans tracking-widest",
                                                                children: [
                                                                    "Capabilities: ",
                                                                    currentHospital.capabilities.join(', ').toUpperCase()
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/hospital/page.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 28
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 24
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/hospital/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 col-span-2 flex items-center gap-4 border-t border-gray-700/50 pt-4 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "uppercase",
                                                        children: "BLOOD BANK:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-[#22c55e] text-[#064e3b] px-3 py-1 rounded text-[10px] font-bold shadow-md shadow-green-900/50 tracking-widest border border-[#4ade80]",
                                                        children: "GREEN"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/hospital/page.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/hospital/page.tsx",
                                                lineNumber: 262,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/hospital/page.tsx",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4 pt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-[#3b82f6] text-white font-bold tracking-wider py-4 rounded shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:bg-[#60a5fa] transition-colors border border-[#60a5fa] uppercase text-xs",
                                                children: "Allocate Emergency Bed"
                                            }, void 0, false, {
                                                fileName: "[project]/app/hospital/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-[#22c55e] text-white font-bold tracking-wider py-4 rounded shadow-[0_0_15px_rgba(34,197,94,0.5)] hover:bg-[#4ade80] transition-colors border border-[#4ade80] uppercase text-xs",
                                                children: "NOTIFY SPECIALTY TEAM"
                                            }, void 0, false, {
                                                fileName: "[project]/app/hospital/page.tsx",
                                                lineNumber: 272,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-[#eab308] text-[#713f12] font-bold tracking-wider py-4 rounded shadow-[0_0_15px_rgba(234,179,8,0.5)] hover:bg-[#fde047] transition-colors border border-[#fde047] uppercase text-xs",
                                                children: "ALLOCATE SURGERY SUITE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/hospital/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "bg-[#ef4444] text-white font-bold tracking-wider py-4 rounded shadow-[0_0_15px_rgba(239,68,68,0.5)] hover:bg-[#f87171] transition-colors border border-[#f87171] uppercase text-[10px] lg:text-xs text-center flex items-center justify-center p-2",
                                                children: "ACTIVATE EMERGENCY PROTOCOL"
                                            }, void 0, false, {
                                                fileName: "[project]/app/hospital/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/hospital/page.tsx",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/hospital/page.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/hospital/page.tsx",
                        lineNumber: 133,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/hospital/page.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/hospital/page.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_2bde9a74._.js.map