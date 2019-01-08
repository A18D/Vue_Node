import React, { PureComponent } from 'react'
import { PageTemplate } from './pageTemplate'

export const Whoops404 = ({ location }) =>
    <PageTemplate>
        <div>
            <h1>Resource not found at '{location.pathname}'</h1>
        </div>
    </PageTemplate>
