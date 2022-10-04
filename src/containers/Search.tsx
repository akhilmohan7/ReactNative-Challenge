/**
 * File: Search.tsx
 * -----
 * Created Date: Tuesday October 4th 2022
 * Author: Akhil Mohan
 * -----
 * Last Modified: Tue Oct 04 2022
 * Modified By: Akhil Mohan
 * @packageDocumentation
 */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FormSearch from '../components/Form/FormSearch';
import File from '../assets/Test.json'

export default function Search() {

    return (
        <FormSearch
            data={ File }
        />
    )
}