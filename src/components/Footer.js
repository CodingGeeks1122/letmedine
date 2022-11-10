import SimpleReactFooter from "simple-react-footer";

const description = "Dine-in · Takeaway · No delivery         One of the most popular places to eat according to the customer ratings & reviews in Bhimtal ";
const title = "Let Me Dine";
const columns = [
{
    title: "Resources",
    resources: [
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Contact",
            link: "/contact"
        },
        {
            name: "Admin",
            link: "/admin"
        }
    ]
},
{
    title: "Legal",
    resources: [
        {
            name: "Privacy",
            link: "/privacy"
        },
        {
            name: "Terms",
            link: "/terms"
        }
    ]
},
{
    title: "Visit",
    resources: [
        {
            name: "Locations",
            link: "/locations"
        },
        {
            name: "Culture",
            link: "/culture"
        }
    ]
}
];
 
const Footer = () => {
    return (
    <SimpleReactFooter 
        description={description} 
        title={title}
        columns={columns}
        linkedin=""
        facebook="airndelight"
        twitter=""
        instagram=""
        youtube="?"
        pinterest=""
        copyright="airndelight"
        iconColor="black"
        backgroundColor="bisque"
        fontColor="black"
        copyrightColor="darkgrey"
    />
    )
}

export default Footer;