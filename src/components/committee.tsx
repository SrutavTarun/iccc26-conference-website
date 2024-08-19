import './styles/committee.css';

const OrganizingCommittee = () => {
    return (
        <div className="organizing-committee-container">
            <h1>Organizing Committee</h1>

            <section className="introduction">
                <p>The success of our conference is made possible by the dedicated efforts of our esteemed organizing committee. Comprising distinguished faculty members from various departments, this committee brings together a wealth of experience and expertise to ensure a high-quality, impactful event.</p>
            </section>

            <section className="main-committee">
                <h2>Chief Patron</h2>
                <ul>
                    <li><strong>Smt. Ishita Roy IAS <br /> Principal Secretary, Higher Education Department, Govt. of Kerala</strong></li>
                </ul>

                <h2>Patron</h2>
                <ul>
                    <li><strong>Dr. Shalij P. R. <br /> Director of Technical Education, Govt. of Kerala</strong></li>
                </ul>

                <h2>General Chair</h2>
                <ul>
                    <li><strong>Dr. Suresh K. <br /> Principal, College of Engineering Trivandrum</strong></li>
                </ul>

                <h2>Organizing Secretary</h2>
                <ul>
                    <li><strong>Dr. Rajeev T. <br /> Professor, Dept. of EE, CET</strong></li>
                </ul>

                <h2>General Co-chairs</h2>
                <ul>
                    <li><strong>Dr. R.M. Shereef <br /> Professor, Dept. of EE, CET</strong></li>
                    <li><strong>Dr. Christy James Jose <br /> Associate Professor, Dept. of ECE, CET</strong></li>
                    <li><strong>Dr. Ajeesh Ramanujan <br /> Associate Professor, Dept. of CSE, CET</strong></li>
                </ul>
            </section>

            <section className="other-committees">
                <h2>Other Committees</h2>

                {committees.map((committee, index) => (
                    <div key={index} className="committee">
                        <h3>{committee.name}</h3>
                        <div className="committee-content">
                            <div className="committee-chair">
                                <p>Chair: {committee.chair.name}<br/>{committee.chair.designation}</p>
                            </div>
                            <div className="committee-co-chair-members">
                            {committee.coChairs && (
                                <div className="committee-co-chairs">
                                    <h4>Co-chairs:</h4>
                                    <ul>
                                        {committee.coChairs.map((coChair:any, coChairIndex:number) => (
                                            <li key={coChairIndex}><strong>{coChair.name}<br />{coChair.designation}</strong></li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {committee.coChair && (
                                <div className="committee-co-chairs">
                                    <h4>Co-chair:</h4>
                                    <ul>
                                        <li><strong>{committee.coChair.name}<br />{committee.coChair.designation}</strong></li>
                                    </ul>
                                </div>
                            )}
                            </div>
                            <div className="committee-members">
                                <h4>Members:</h4>
                                <ul>
                                    {committee.members.map((member, memberIndex) => (
                                        <li key={memberIndex}><strong>{member.name}<br/>{member.designation}</strong></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

const committees = [
    {
        name: "Technical Program Committee",
        chair: {name:"Dr. Jerrin Thomas Panachakel", designation:"Assistant Professor, Dept. of ECE, CET"},
        coChairs: [
            {name: "Dr. Praveen S Babu", designation: "Associate Professor, Dept. of EE, CET"},
            {name: "Dr. Linu Shine", designation: "Associate Professor, Dept. of ECE, CET"},
            {name: "Dr. Dhanya S.Pankaj", designation: "Assistant Professor, Dept. of CSE, CET"}
        ],
        members: [
            {name: "Dr. Jayakumar P.", designation:"Associate Professor, Dept. of EE, CET"},
            {name: "Prof. Sabina.M.A", designation:"Associate Professor, Dept. of MCA, CET"},
            {name: "Dr. Biju K.S", designation:"Associate Professor, Dept. of ECE, CET"}
        ]
    },
    {
        name: "Finance Committee",
        chair: {name:"Dr. Mabel Ebenezer", designation:"Professor, Dept. of EE, CET"},
        members: [
            {name: "Dr. Nikhil.M", designation: "Assistant Professor, Dept. of ECE, CET"},
            {name: "Prof. Rani Koshy", designation: "Assistant Professor, Dept. of CSE, CET"},
            {name: "Prof. Divya Krishnan", designation: "Assistant Professor, Dept. of EE, CET"}
        ]
    },
    {
        name: "Publication Committee",
        chair: {name:"Dr. Hari Kumar.R", designation:"Associate Professor, Dept. of EE, CET"},
        members: [
            {name: "Dr. Vinod.B.R", designation: "Associate Professor, Dept. of ECE, CET"},
            {name: "Prof. Deepa M.U", designation: "Assistant Professor, Dept. of EE, CET"},
            {name: "Prof. Resmi E", designation: "Assistant Professor, Dept. of ECE, CET"},
            {name: "Prof. Narasimhan T", designation: "Assistant Professor, Dept. of CSE, CET"}
        ]
    },
    // {
    //     name: "Website Committee",
    //     chair: "Prof. John Prakash Joseph - Associate Professor, Dept. of EE, CET",
    //     members: [
    //         "Dr. Piyoosh P. - Assistant Professor, Dept. of CSE, CET",
    //         "Prof. Deepa. S.S - Associate Professor, MCA, CET",
    //         "Prof. Viji. R - Assistant Professor, Dept. of ECE, CET"
    //     ]
    // },
    // {
    //     name: "Tutorial and Keynote Committee",
    //     chair: "Prof. Leena V.A - Assistant Professor, Dept. of CSE, CET",
    //     coChair: {name: "Dr. Sreeja. S", designation: "Associate Professor, Dept. of EE, CET"},
    //     members: [
    //         "Dr. Reshmi S Bhooshan - Assistant Professor, Dept. of ECE, CET",
    //         "Prof. Haseela H.A - Assistant Professor (Adhoc), Dept. of CSE, CET"
    //     ]
    // },
    // {
    //     name: "Publicity Committee",
    //     chair: "Dr. Pradeep R. - Professor, Dept. of ECE, CET",
    //     members: [
    //         "Dr. Vivek R.S - Assistant Professor, Dept. of EE, CET",
    //         "Prof. Sohan Placid John - Assistant Professor, Dept. of EE, CET",
    //         "Dr. Vinod. B.R - Associate Professor, Dept. of ECE, CET",
    //         "Dr.Saritha.R - Associate Professor, Dept. of CSE, CET"
    //     ]
    // },
    // {
    //     name: "Food and Accommodation Committee",
    //     chair: "Prof. Tonny K B - Assistant Professor, Dept. of Mathematics",
    //     members: [
    //         "Dr. Praveen Kumar T K - Assistant Professor, Dept. of Physical Education",
    //         "Prof. Akhil. I. R - Assistant Professor, Dept. of EE, CET",
    //         "Prof. Prajeesh.P. Prabhakaran - Assistant Professor, Dept. of EE, CET",
    //         "Prof. Adersh V.R - Assistant Professor, Dept. of ECE, CET",
    //         "Prof. Titto Anujan - Assistant Professor, Dept. of ECE, CET",
    //         "Prof. Sunitha D - Assistant Professor (Adhoc), Dept. of CSE, CET",
    //         "Prof. Bincy.P.Mathew - Assistant Professor(Adhoc), Dept. of CSE,CET"
    //     ]
    // },
    // {
    //     name: "Venue Management Committee",
    //     chair: "Prof. Saina Deepthi - Associate Professor, Dept. of EE, CET",
    //     members: [
    //         "Dr. Lekshmi Mohan - Associate Professor, Dept. of EE, CET",
    //         "Prof. Smitha K S - Associate Professor, Dept. of EE, CET",
    //         "Prof. Sudhi S - Assistant Professor, Dept. of ECE, CET",
    //         "Prof. P G Gigy - Assistant Professor, Dept. of ECE, CET",
    //         "Prof. Prafulla P - Assistant Professor, Dept. of CSE, CET",
    //         "Prof. Pooja J. P - Assistant Professor (Adhoc), Dept. of MCA, CET",
    //         "Prof. M. Roykumar - Associate Professor, Dept. of EE, CET"
    //     ]
    // },
    // {
    //     name: "Transportation Committee",
    //     chair: "Prof. Sajeev Mohan M. - Assistant Professor, Dept. of Physics, CET",
    //     members: [
    //         "Dr. Binu L.S. - Professor, Dept. of ECE, CET",
    //         "Prof. Sabir V.E. - Assistant Professor, Dept. of EE, CET",
    //         "Prof. Akhil V.V - Assistant Professor (Adhoc), Dept. of CSE, CET"
    //     ]
    // },
    // {
    //     name: "Certificate Committee",
    //     chair: "Dr. Arlene Davidson R. - Associate Professor, Dept. of EE, CET",
    //     members: [
    //         "Dr. Asha Prasad - Associate Professor, Dept. of ECE, CET",
    //         "Prof. Divya S K - Assistant Professor (Adhoc), Dept. of CSE, CET",
    //         "Dr. Ann Mary Joshua - Assistant Professor, Dept. of EE, CET"
    //     ]
    // },
    // {
    //     name: "Registration Committee",
    //     chair: "Prof. T. Samina - Associate Professor, Dept. of EE, CET",
    //     members: [
    //         "Prof. Sreedevi G. - Assistant Professor, Dept. of EE, CET",
    //         "Prof. Jijina N. - Assistant Professor, Dept. of ECE, CET",
    //         "Prof. Sree Vidhya K S - Assistant Professor (Adhoc), Dept. of CSE, CET"
    //     ]

        {
            name: "Website Committee",
            chair: {name: "Prof. John Prakash Joseph", designation: "Associate Professor, Dept. of EE, CET"},
            coChair : {name: "Dr. Piyoosh P.", designation: "Assistant Professor, Dept. of CSE, CET"},
            "members": [
                // {name: "Dr. Piyoosh P.", designation: "Assistant Professor, Dept. of CSE, CET"},
                {name: "Prof. Deepa. S.S", designation: "Associate Professor, MCA, CET"},
                {name: "Prof. Viji. R", designation: "Assistant Professor, Dept. of ECE, CET"}
            ]
        },
        {
            name: "Tutorial and Keynote Committee",
            chair: {name: "Prof. Leena V.A", designation: "Assistant Professor, Dept. of CSE, CET"},
            "coChair": {name: "Dr. Sreeja. S", designation: "Associate Professor, Dept. of EE, CET"},
            "members": [
                {name: "Dr. Reshmi S Bhooshan", designation: "Assistant Professor, Dept. of ECE, CET"},
                {name: "Prof. Haseela H.A", designation: "Assistant Professor (Adhoc), Dept. of CSE, CET"}
            ]
        },
        {
            name: "Publicity Committee",
            chair: {name: "Dr. Pradeep R.", designation: "Professor, Dept. of ECE, CET"},
            coChair: {name: "Dr. Saritha. R", designation: "Associate Professor, Dept. of CSE, CET"},
            "members": [
                {name: "Dr. Vivek R.S", designation: "Assistant Professor, Dept. of EE, CET"},
                {name: "Prof. Sohan Placid John", designation: "Assistant Professor, Dept. of EE, CET"},
                {name: "Dr. Vinod. B.R", designation: "Associate Professor, Dept. of ECE, CET"}
                // {name: "Dr. Saritha. R", designation: "Associate Professor, Dept. of CSE, CET"}
            ]
        },
        {
            name: "Food and Accommodation Committee",
            chair: {name: "Prof. Tonny K B", designation: "Assistant Professor, Dept. of Mathematics"},
            "members": [
                {name: "Dr. Praveen Kumar T K", designation: "Assistant Professor, Dept. of Physical Education"},
                {name: "Prof. Akhil. I. R", designation: "Assistant Professor, Dept. of EE, CET"},
                {name: "Prof. Prajeesh. P. Prabhakaran", designation: "Assistant Professor, Dept. of EE, CET"},
                {name: "Prof. Adersh V.R", designation: "Assistant Professor, Dept. of ECE, CET"},
                {name: "Prof. Titto Anujan", designation: "Assistant Professor, Dept. of ECE, CET"},
                {name: "Prof. Sunitha D", designation: "Assistant Professor (Adhoc), Dept. of CSE, CET"},
                {name: "Prof. Bincy P. Mathew", designation: "Assistant Professor(Adhoc), Dept. of CSE, CET"}
            ]
        },
        {
            name: "Venue Management Committee",
            chair: {name: "Prof. Saina Deepthi", designation: "Associate Professor, Dept. of EE, CET"},
            "members": [
                {name: "Dr. Lekshmi Mohan", designation: "Associate Professor, Dept. of EE, CET"},
                {name: "Prof. Smitha K S", designation: "Associate Professor, Dept. of EE, CET"},
                {name: "Prof. Sudhi S", designation: "Assistant Professor, Dept. of ECE, CET"},
                {name: "Prof. P G Gigy", designation: "Assistant Professor, Dept. of ECE, CET"},
                {name: "Prof. Prafulla P", designation: "Assistant Professor, Dept. of CSE, CET"},
                {name: "Prof. Pooja J. P", designation: "Assistant Professor (Adhoc), Dept. of MCA, CET"},
                {name: "Prof. M. Roykumar", designation: "Associate Professor, Dept. of EE, CET"}
            ]
        },
        {
            name: "Transportation Committee",
            chair: {name: "Prof. Sajeev Mohan M.", designation: "Assistant Professor, Dept. of Physics, CET"},
            "members": [
                {name: "Dr. Binu L.S.", designation: "Professor, Dept. of ECE, CET"},
                {name: "Prof. Sabir V.E.", designation: "Assistant Professor, Dept. of EE, CET"},
                {name: "Prof. Akhil V.V", designation: "Assistant Professor (Adhoc), Dept. of CSE, CET"}
            ]
        },
        {
            name: "Certificate Committee",
            chair: {name: "Dr. Arlene Davidson R.", designation: "Associate Professor, Dept. of EE, CET"},
            "members": [
                {name: "Dr. Asha Prasad", designation: "Associate Professor, Dept. of ECE, CET"},
                {name: "Prof. Divya S K", designation: "Assistant Professor (Adhoc), Dept. of CSE, CET"},
                {name: "Dr. Ann Mary Joshua", designation: "Assistant Professor, Dept. of EE, CET"}
            ]
        },
        {
            name: "Registration Committee",
            chair: {name: "Prof. T. Samina", designation: "Associate Professor, Dept. of EE, CET"},
            "members": [
                {name: "Prof. Sreedevi G.", designation: "Assistant Professor, Dept. of EE, CET"},
                {name: "Prof. Jijina N.", designation: "Assistant Professor, Dept. of ECE, CET"},
                {name: "Prof. Sree Vidhya K S", designation: "Assistant Professor (Adhoc), Dept. of CSE, CET"}
            ]
        }
];

export default OrganizingCommittee;