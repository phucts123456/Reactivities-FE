import { observer } from "mobx-react-lite";
import { Tab } from "semantic-ui-react";
import { date } from "yup";
import { Profile } from "../../app/common/modals/profile";
import { useStore } from "../../app/stores/store";
import ProfileFollowing from "./ProfileFollowing";
import ProfilePhotos from "./ProfilePhotos";
import ProfileAbout from "./ProflieAbout";

interface Props {
    profile: Profile;
}

export default observer(function ProfileContent({ profile }: Props) {
    const { profileStore } = useStore();
    const panes = [
        { menuItem: 'About', render: () => <ProfileAbout /> },
        { menuItem: 'Photos', render: () => <ProfilePhotos profile={profile} /> },
        { menuItem: 'Events', render: () => <Tab.Pane>Events Content</Tab.Pane> },
        { menuItem: 'Followers', render: () => <ProfileFollowing /> },
        { menuItem: 'Following', render: () => <ProfileFollowing /> },

    ];



    return (
        <Tab
            menu={{ fluid: true, vertical: true }}
            menuPosition='right'
            panes={panes}
            onTabChange={(e, data) => profileStore.setActiveTab(data.activeIndex)}
        />
    )
})