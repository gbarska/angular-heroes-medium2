import { Profile } from 'selenium-webdriver/firefox';

export interface Hero {
    id?: string,
    firstName?: string,
    lastName?: string,
    superHeroName?: string,
    image: string,
    profilePicture?: string
}