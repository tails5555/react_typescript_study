import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {HomeContainerPage, CalculatorPage, PhoneBookPage, PhoneFormPage, MusicTablePage, MusicEditPage, GenreListPage} from '../container';

const RootRouter : React.StatelessComponent<{}> = () => (
    <React.Fragment>
        <Route exact path="/" component={HomeContainerPage} />
        <Route exact path="/example/calculator" component={CalculatorPage} />
        <Route exact path="/example/phone_list" component={PhoneBookPage} />
        <Route exact path="/example/phone_list/_refresh" render={() => <Redirect to="/example/phone_list" />} />
        <Route exact path="/example/phone_create" component={PhoneFormPage} />
        <Route exact path="/example/phone_update/:id" component={PhoneFormPage} />
        <Route exact path="/example/music_list" component={MusicTablePage} />
        <Route exact path="/example/music_list/_refresh" render={() => <Redirect to="/example/music_list" />} />
        <Route exact path="/example/music_create" component={MusicEditPage} />
        <Route exact path="/example/music_update/:id" component={MusicEditPage} />
        <Route exact path="/example/genre_list" component={GenreListPage} />
    </React.Fragment>
);

export default RootRouter;