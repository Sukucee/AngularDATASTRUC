import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { BookListComponent } from './book-list/book-list.component';
import { CityListComponent } from './city-list/city-list.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CarModelListComponent } from './car-model-list/car-model-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { CountryListComponent } from './country-list/country-list.component';
import { SportListComponent } from './sport-list/sport-list.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { AnimalComponent } from './animal/animal.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { LanguageListComponent } from './language-list/language-list.component';
import { GameListComponent } from './game-list/game-list.component';
import { SoftwareListComponent } from './software-list/software-list.component';
import { PhoneContactListComponent } from './phone-contact-list/phone-contact-list.component';
import { MusicPlaylistComponent } from './music-playlist/music-playlist.component';
import { FoodMenuListComponent } from './food-menu-list/food-menu-list.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { ClassroomListComponent } from './classroom-list/classroom-list.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { LectureListComponent } from './lecture-list/lecture-list.component';
import { StationeryListComponent } from './stationery-list/stationery-list.component';
import { FlowerListComponent } from './flower-list/flower-list.component';
import { DestinationListComponent } from './destination-list/destination-list.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { LaptopSpecsListComponent } from './laptop-specs-list/laptop-specs-list.component';
import { ComputerHardwareListComponent } from './computer-hardware-list/computer-hardware-list.component';
import { MobileAppListComponent } from './mobile-app-list/mobile-app-list.component';
import { VideoListComponent } from './video-list/video-list.component';
import { TVShowListComponent } from './tvshow-list/tvshow-list.component';
import { FurnitureListComponent } from './furniture-list/furniture-list.component';
import { AccessoryListComponent } from './accessory-list/accessory-list.component';
import { BuildingListComponent } from './building-list/building-list.component';
import { PaintingListComponent } from './painting-list/painting-list.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { PodcastListComponent } from './podcast-list/podcast-list.component';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { MealPlanListComponent } from './meal-plan-list/meal-plan-list.component';
import { BudgetListComponent } from './budget-list/budget-list.component';
import { PresentationListComponent } from './presentation-list/presentation-list.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { DevelopersToolListComponent } from './developers-tool-list/developers-tool-list.component';
import { FrameworkListComponent } from './framework-list/framework-list.component';
import { LibraryListComponent } from './library-list/library-list.component';

export const routes: Routes = [

    {
    	title: 'Student List',
		component: StudentListComponent,
		path: 'student-list',
		},
	{
		title: 'Employee List',
		component: EmployeeListComponent,
		path: 'employee-list',
		},
	{
		title: 'Fruit List',
		component: FruitListComponent,
		path: 'fruit-list',
		},
	{
		title: 'Course-List',
		component: CourseListComponent,
		path: 'course-list',
		},
	{
		title: 'Book-List',
		component: BookListComponent,
		path: 'book-list',
		},
	{
		title: 'City-List',
		component: CityListComponent,
		path: 'city-list',
		},
	{
		title: 'Movie-List',
		component: MovieListComponent,
		path: 'movie-list',
		},
	{
		title: 'Car Model-List',
		component: CarModelListComponent,
		path: 'carmodel-list',
		},
	{
		title: 'Product-List',
		component: ProductListComponent,
		path: 'product-list',
		},
	{
		title: 'Subject-List',
		component: SubjectListComponent,
		path: 'subject-list',
		},
	{
		title: 'Country-List',
		component: CountryListComponent,
		path: 'country-list',
		},
	{
		title: 'Sport-List',
		component: SportListComponent,
		path: 'sport-list',
		},
	{
		title: 'Vegie-List',
		component: VegetableListComponent,
		path: 'vegetable-list',
		},
	{
		title: 'Animal-List',
		component: AnimalComponent,
		path: 'animal-list',
		},
	{
		title: 'Tool-List',
		component: ToolListComponent,
		path: 'tool-list',
		},
	{
		title: 'Language-List',
		component: LanguageListComponent,
		path: 'language-list',
		},
	{
		title: 'Game-List',
		component: GameListComponent,
		path: 'game-list',
		},
	{
		title: 'Software-List',
		component: SoftwareListComponent,
		path: 'software-list',
		},
	{
		title: 'Phone Contact-List',
		component: PhoneContactListComponent,
		path: 'contact-list',
		},
	{
		title: 'Music PlayList',
		component: MusicPlaylistComponent,
		path: 'musicplaylist-list',
		},
	{
		title: 'Menu List',
		component: FoodMenuListComponent,
		path: 'menu-list',
		},
	{
		title: 'Grocery List',
		component: GroceryListComponent,
		path: 'grocery-list',
		},

	{
		title: 'Clasroom List',
		component: ClassroomListComponent,
		path: 'classroom-list',
		},
	{
		title: 'Inventory List',
		component: InventoryListComponent,
		path: 'inventory-list',
		},
	{
		title: 'Lecture List',
		component: LectureListComponent,
		path: 'lecture-list',
		},
	{
		title: 'Stationery List',
		component: StationeryListComponent,
		path: 'stationery-list',
		},
	{
		title: 'Flower List',
		component: FlowerListComponent,
		path: 'flower-list',
		},
	{
		title: 'Destination List',
		component: DestinationListComponent,
		path: 'destination-list',
		},
	{
		title: 'Lappy List',
		component: LaptopListComponent,
		path: 'lappy-list',
		},
	{
		title: 'Lappy Spec List',
		component: LaptopSpecsListComponent,
		path: 'lappyspec-list',
		},
	{
		title: 'Computer Hardware List',
		component: ComputerHardwareListComponent,
		path: 'computer_hardware-list',
		},
	{
		title: 'Mobile App List',
		component: MobileAppListComponent,
		path: 'mobile-app-list',
		},
	{
		title: 'Video List',
		component: VideoListComponent,
		path: 'video-list',
		},
	{
		title: 'TV Show List',
		component: TVShowListComponent,
		path: 'tv-show-list',
		},
	{
		title: 'Furniture List',
		component: FurnitureListComponent,
		path: 'furniture-list',
		},
	{
		title: 'Accessory List',
		component: AccessoryListComponent,
		path: 'accessory-list',
		},
	{
		title: 'Building List',
		component: BuildingListComponent,
		path: 'building-list',
		},
	{
		title: 'Painting List',
		component: PaintingListComponent,
		path: 'painting-list',
		},
	{
		title: 'Artist List',
		component: ArtistListComponent,
		path: 'artist-list',
		},
	{
		title: 'Composer List',
		component: ComposerListComponent,
		path: 'composer-list',
		},
	{
		title: 'Podcast List',
		component: PodcastListComponent,
		path: 'podcast-list',
		},
	{
		title: 'Exercise List',
		component: ExerciseListComponent,
		path: 'exercise-list',
		},
	{
		title: 'Meal Plan List',
		component: MealPlanListComponent,
		path: 'mealplan-list',
		},
	{
		title: 'Budget List',
		component: BudgetListComponent,
		path: 'budget-list',
		},
	{
		title: 'Presentation List',
		component: PresentationListComponent,
		path: 'presentation-list',
		},
	{
		title: 'Tour List',
		component: TourListComponent,
		path: 'tour-list',
		},
	{
		title: 'Event List',
		component: EventListComponent,
		path: 'event-list',
		},
	{
		title: 'Developer Tool List',
		component: DevelopersToolListComponent,
		path: 'developer-list',
		},
	{
		title: 'Framework List',
		component: FrameworkListComponent,
		path: 'framework-list',
		},
	{
		title: 'Library List',
		component: LibraryListComponent,
		path: 'library-list',
		},
];
