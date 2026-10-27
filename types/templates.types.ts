import type { CSSProperties } from 'react';

export interface ThemeFontsData {
  primary: string;
  heading: string;
  navigation: string;
}

export interface ThemeData {
  fonts: ThemeFontsData;
}

export type ThemeFontVariables = CSSProperties & {
  '--font-primary': string;
  '--font-heading': string;
  '--font-navigation': string;
};

export interface HeaderNavLink {
  id: string;
  label: string;
  url: string;
}

export interface HeaderData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  phoneLabel: string;
  phoneValue: string;
  phoneUrl: string;
  menuLabel: string;
  navLinksLeft: HeaderNavLink[];
  navLinksRight: HeaderNavLink[];
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface HeaderProps {
  data?: HeaderData;
  overlay?: boolean;
}

export interface BreadcrumbPath {
  id: string;
  label: string;
  url?: string;
}

export interface BreadcrumbData {
  title: string;
  bgImage?: string;
  paths: BreadcrumbPath[];
}

export interface GlobalUIData {
  breadcrumbSeparator: string;
}

export interface BreadcrumbProps {
  data?: BreadcrumbData;
  ui?: GlobalUIData;
}

export interface HeroData {
  backgroundImage: string;
  backgroundImageAlt: string;
}

export interface HeroSectionProps {
  data?: HeroData;
}

export interface AboutStatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface AboutUsData {
  subtitle: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  backgroundImage: string;
  buttonText: string;
  buttonUrl: string;
  counterDurationMs: number;
  stats: AboutStatItem[];
}

export interface AboutUsProps {
  data?: AboutUsData;
  showButton?: boolean;
}

export interface MissionVisionTab {
  id: string;
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface MissionVisionData {
  tabs: MissionVisionTab[];
}

export interface MissionVisionProps {
  data?: MissionVisionData;
}

export interface WhyChooseFeature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface WhyChooseUsData {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  mainImage: string;
  mainImageAlt: string;
  badgeTitle: string;
  lowerImage: string;
  lowerImageAlt: string;
  features: WhyChooseFeature[];
}

export interface WhyChooseUsProps {
  data?: WhyChooseUsData;
}

export interface RoomFeatureItem {
  id: string;
  icon: string;
  title: string;
  description?: string;
}

export interface RoomFeatureProps {
  feature: RoomFeatureItem;
}

export interface RoomAmenityItem {
  id: string;
  icon: string;
  label: string;
}

export interface RoomSuiteItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  price: string;
  nights: string;
  guests: string;
  bed: string;
  view: string;
  size: string;
  checkIn: string;
  checkOut: string;
  aboutTitle: string;
  aboutParagraphs: { id: string; text: string }[];
  features: RoomFeatureItem[];
  highlights: RoomFeatureItem[];
  amenities: RoomAmenityItem[];
  gallery: { id: string; image: string; imageAlt: string }[];
  breadcrumb: BreadcrumbData;
}

export interface RoomsSuitesData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  homeEyebrow: string;
  homeTitle: string;
  homeDescription: string;
  homeViewAllLabel: string;
  homeViewAllUrl: string;
  homeBookLabel: string;
  homeFromLabel: string;
  homeSliderIntervalMs: number;
  popularLabel: string;
  startingFromLabel: string;
  perNightLabel: string;
  viewPackageLabel: string;
  amenitiesTitle: string;
  highlightsTitle: string;
  galleryTitle: string;
  checkInLabel: string;
  checkOutLabel: string;
  previousImageLabel: string;
  nextImageLabel: string;
  closeImageLabel: string;
  overviewFeatures: RoomFeatureItem[];
  rooms: RoomSuiteItem[];
}

export interface RoomsSuitesProps {
  data?: RoomsSuitesData;
}

export interface RoomsSuitesSliderProps {
  data?: RoomsSuitesData;
}

export interface AmenityItem {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface AmenitiesData {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  description: string;
  items: AmenityItem[];
}

export interface AmenitiesProps {
  data?: AmenitiesData;
}

export interface FacilityItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FacilitiesData {
  eyebrow: string;
  title: string;
  items: FacilityItem[];
}

export interface FacilitiesProps {
  data?: FacilitiesData;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface ResortStatsData {
  backgroundImage: string;
  counterDurationMs: number;
  items: StatItem[];
}

export interface ResortStatsProps {
  data?: ResortStatsData;
}

export interface PlaceItem {
  id: string;
  image: string;
  imageAlt: string;
}

export interface NearbyPlacesData {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  places: PlaceItem[];
}

export interface NearbyPlacesProps {
  data?: NearbyPlacesData;
}

export interface ActivityExperienceItem {
  id: string;
  number: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ActivitiesExperiencesData {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  titleHighlight: string;
  description: string;
  items: ActivityExperienceItem[];
}

export interface ActivitiesExperiencesProps {
  data?: ActivitiesExperiencesData;
}

export interface RoomSuiteDetailsProps {
  data?: RoomsSuitesData;
  room?: RoomSuiteItem;
}

export interface RoomSuiteDetailsPageProps {
  params: Promise<{ id: string }>;
}

export interface GalleryImageItem {
  id: string;
  image: string;
  imageAlt: string;
}

export interface GalleryData {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  pageSize: number;
  loadMoreLabel: string;
  previousLabel: string;
  nextLabel: string;
  closeLabel: string;
  openImageLabel: string;
  images: GalleryImageItem[];
}

export interface GalleryProps {
  data?: GalleryData;
}

export interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
}

export interface FaqData {
  eyebrow: string;
  title: string;
  highlightedTitle: string;
  description: string;
  decorativeIcon: string;
  initialOpenItemId: string;
  openQuestionLabel: string;
  closeQuestionLabel: string;
  items: FaqItem[];
}

export interface FaqProps {
  data?: FaqData;
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export interface TeamFounderData {
  portrait: string;
  portraitAlt: string;
  backgroundImage: string;
  backgroundImageAlt: string;
  quoteMark: string;
  eyebrow: string;
  description: string;
  name: string;
  role: string;
  featureEyebrow: string;
  featureTitle: string;
}

export interface OurTeamData {
  subtitle: string;
  titleLine1: string;
  highlightedTitle: string;
  description: string;
  founder: TeamFounderData;
  cardActionIcon: string;
  socialLinks: { id: string; icon: string; label: string; url: string }[];
  members: TeamMemberItem[];
}

export interface OurTeamProps {
  data?: OurTeamData;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  location: string;
  image: string;
  imageAlt: string;
  avatar: string;
  avatarAlt: string;
}

export interface TestimonialsData {
  subtitle: string;
  titleLine1: string;
  highlightedTitle: string;
  slideLabel: string;
  items: TestimonialItem[];
}

export interface TestimonialsProps {
  data?: TestimonialsData;
}

export interface FooterData {
  logo: string;
  logoAlt: string;
  logoUrl: string;
  description: string;
  copyrightText: string;
  contactPrompt: string;
  quickLinksTitle: string;
  roomsTitle: string;
  contactTitle: string;
  socialLinks: { id: string; icon: string; label: string; url: string }[];
  quickLinks: { id: string; label: string; url: string }[];
  roomLinks: { id: string; label: string; url: string }[];
  contactItems: { id: string; value: string; url?: string }[];
}

export interface FooterProps {
  data?: FooterData;
}

export interface NotFoundData {
  code: string;
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
}

export interface NotFoundSectionProps {
  data?: NotFoundData;
}

export interface TemplateComponentItem {
  key: string;
  component: string;
}

export interface TemplateComponentPage {
  components: TemplateComponentItem[];
}

export interface TemplateComponentsData {
  shared: {
    Header: string;
    Footer: string;
  };
  pages: Record<string, TemplateComponentPage>;
}

export interface ContactInfoLine {
  id: string;
  text: string;
}

export interface ContactInfoItem {
  id: string;
  icon: string;
  title: string;
  lines: ContactInfoLine[];
  url?: string;
}

export interface ContactData {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  decorativeIcon: string;
  contactInfoEyebrow: string;
  contactInfoTitle: string;
  contactInfoDescription: string;
  locationEyebrow: string;
  locationTitle: string;
  locationDescription: string;
  form: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    nameIcon: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailIcon: string;
    phoneLabel: string;
    phonePlaceholder: string;
    phoneIcon: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    subjectIcon: string;
    messageLabel: string;
    messagePlaceholder: string;
    messageIcon: string;
    buttonText: string;
    buttonIcon: string;
    successMessage: string;
  };
  contactItems: ContactInfoItem[];
  location: {
    mapUrl: string;
    mapTitle: string;
  };
}

export interface ContactProps {
  data?: ContactData;
}

export interface BlogAuthor {
  id: string;
  name: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  description?: string;
  date: string;
  image: string;
  imageAlt: string;
  url: string;
  authorId?: string;
  comments?: string;
}

export interface BlogDetailItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface BlogDetailContent {
  recentPostsTitle: string;
  introText: string;
  quoteText: string;
  quoteAuthor: string;
  quoteRole: string;
  commentsLabel: string;
  conclusionTitle: string;
  conclusionText: string;
  sections: BlogDetailItem[];
}

export interface BlogData {
  listingEyebrow: string;
  listingTitle: string;
  listingHighlight: string;
  listingDescription: string;
  homeSubtitle: string;
  homePostIds: string[];
  listingPostIds: string[];
  detailPostId: string;
  detailPageUrl: string;
  popularDescription: string;
  latestTitle: string;
  latestHighlight: string;
  viewAllText: string;
  authorPrefix: string;
  authors: BlogAuthor[];
  posts: BlogPost[];
  detail: BlogDetailContent;
  recentPostIds: string[];
}

export interface BlogsProps {
  data?: BlogData;
  showAll?: boolean;
}

export interface BlogDetailProps {
  data?: BlogData;
  postId: string;
}

export interface BlogDetailsPageProps {
  params: Promise<{ id: string }>;
}

export interface SiteMetadataData {
  title: string;
  description: string;
  icon: string;
}

export interface HotelTemplateData {
  common: {
    theme: ThemeData;
    metadata: SiteMetadataData;
    globalUI: GlobalUIData;
    aboutBreadcrumb?: BreadcrumbData;
    roomsSuitesBreadcrumb?: BreadcrumbData;
    contactBreadcrumb?: BreadcrumbData;
    blogsBreadcrumb?: BreadcrumbData;
    blogDetailBreadcrumb?: BreadcrumbData;
    galleryBreadcrumb?: BreadcrumbData;
    amenitiesBreadcrumb?: BreadcrumbData;
    teamBreadcrumb?: BreadcrumbData;
    activitiesExperiencesBreadcrumb?: BreadcrumbData;
    faqsBreadcrumb?: BreadcrumbData;
    notFound?: NotFoundData;
    Footer?: FooterData;
  };
  categories: {
    Hotel: {
      templateComponents?: TemplateComponentsData;
      sections: {
        Header?: { variants?: { HotelHeader1?: HeaderData } };
        Hero?: { variants?: { HotelHero1?: HeroData } };
        AboutUs?: { variants?: { HotelAboutUs1?: AboutUsData } };
        MissionVision?: { variants?: { HotelMissionVision1?: MissionVisionData } };
        WhyChooseUs?: { variants?: { HotelWhyChooseUs1?: WhyChooseUsData } };
        RoomsSuites?: { variants?: { HotelRoomsSuites1?: RoomsSuitesData } };
        Amenities?: { variants?: { HotelAmenities1?: AmenitiesData } };
        Facilities?: { variants?: { HotelFacilities1?: FacilitiesData } };
        ResortStats?: { variants?: { HotelResortStats1?: ResortStatsData } };
        NearbyPlaces?: { variants?: { HotelNearbyPlaces1?: NearbyPlacesData } };
        ActivitiesExperiences?: { variants?: { HotelActivitiesExperiences1?: ActivitiesExperiencesData } };
        Faq?: { variants?: { HotelFaq1?: FaqData } };
        Blogs?: { variants?: { HotelBlogs1?: BlogData } };
        Gallery?: { variants?: { HotelGallery1?: GalleryData } };
        OurTeam?: { variants?: { HotelOurTeam1?: OurTeamData } };
        Testimonials?: { variants?: { HotelTestimonials1?: TestimonialsData } };
        contact?: { variants?: { HotelContact1?: ContactData } };
      };
    };
  };
}
