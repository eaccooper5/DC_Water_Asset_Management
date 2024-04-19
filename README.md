# DC_Water_Asset_Management
## Project 4

## Project Name:
### DC Water Asset Management

## Table of Contents
  - [Project Name](#Economic Trends in Emerging Market and Developing Economies)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#abstract)
  - [Prerequisites](#prerequisites)
  - [Setup and Configuration](#setup-and-configuration)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Contributing](#contributing)
    
## Abstract
Potomac Interceptor is a pipe system, managed by DC Water, that conveys flow from various District suburban jurisdictions including Dulles Airport, Loudoun County, Fairfax County, Town of Vienna, Montgomery County, National Park Service and Navy Yard (Research Center) to the Blue Plains Advanced Wastewater Treatment Plant.

The purpose of this project is to conduct a two part analysis of structural and cost share analysis of the sewer asset management system of the Potomac Interceptor.  Using SQL, Pandas Python and machine learning tools, we are attempting to predict which pipe segments are at greatest risk of failure and would require more frequent inspections and labor. In another part we are attempting to calculate the cost share percentages of various jurisdictions at various locations.  From there we will determine how a jurisdiction’s costs might be impacted by the riskiest pipe segments.

We selected District Suburban Jurisdictions for our pipe samples. These jurisdictions span part of the Maryland/Virginia border and range into part of DC. Some of the involved counties share access to the same pipes but would not necessarily share the same responsibility and labor costs. In our analysis we will determine which jurisdictions have the highest share of pipe segments that are the most at risk and then calculate what costs would be shared by the affected jurisdictions were those pipes to fail. 

We will use Leaflet to create a map to highlight user jurisdictions and their pipe segments.  We will preprocess and filter data downloaded from Maximo (IBM Asset Management Software) and DC Water and user jurisdiction’s reports using SQL. Once the data is filtered and preprocessed, it will be downloaded as  a .csv file for use by the Pandas Python for flow, and share calculation.  Using jurisdictional flow and pipe condition data from the DC Water Report, we will use machine learning to predict the frequency of inspection cycles and risk per location. Combining this with timekeeping data from IBM Maximo we will determine the shared cost impact to the jurisdictions that we predict would be most affected by a pipe collapse.

## Prerequisites
#### Listed here are the languages and libraries required for this project.
​
- **SQL:** 
    (PostgreSQL with pgAdmin Download)[https://www.enterprisedb.com/downloads/postgres-postgresql-downloads]
- **Python:** 
    - This project requires Python 3.7 or later. You can download it from [python.org](https://www.python.org/downloads/).
- **Javascript:** (Leaflet)
- **Jupyter Notebook:** 
    (Documentation for Anaconda installation)[https://docs.anaconda.com/free/anaconda/install/]
- **Additional libraries:** 
    - pandas: (Documentation for Anaconda installation)[https://docs.anaconda.com/free/anaconda/install/]
    - scikit-learn: (Documentation for scikit-learn installation)[https://scikit-learn.org/stable/install.html]

## Usage
### Setup and Configuration
SQL data retrieval. Data processed by joining tables into usable .csv files for processing.

​
### Getting Started

Clone this project's repo to your local computer:

git clone https://github.com/eaccooper5/DC_Water_Asset_Management.git 

Navigate to your project directory:

cd DC_Water_Asset_Management

#### Explanation of directories:
    1_project_ideation
        - directory of idea generation files including assignment requirements, project abstract, descriptive Power Points, and our organizational flow chart.
    2_resource
        - contains resource directories for the various working files, each directory pertaining to different areas of the project (pipe flow, labor cost, and machine learning predictions)
    3_codes
        - working file directory containing the primary jupyter notebooks:
            -flow_share_calc.ipynb
            -inspection_labor_hour.ipynb
            -ml_predicting risk.ipynb
        - and included JavaScript/Leaflet, CSS, and HTML files:
            -index.html
            -logic.js
            -style.css
    4_output_and_visualization
        - contains the .csv outputs to use in our visualisations and relevant image files/visualisation files.

### Steps to complete
- create Leaflet map to introduce 
- explain SQL processing (flow share and labor share) to .csv to use for use in Pandas processing and machine learning prediction models.

- In pandas, flow and cost analysis used to calculate user cost share and determine the cost impact in the event of pipe collapse.
    - describe flow_share_calc.ipynb
        - Import Dependencies:
        import os
        import pandas as pd
        from pathlib import Path
        import numpy as np
        - populate data from("../2_resource/flow_data/user_flow_fy2023.csv")
                            ("../2_resource/flow_data/6.district_flow_estimate.csv")
                            ("../2_resource/flow_data/7.verification_flow.csv")
                            ("../2_resource/flow_data/8.PI_Suburban_Flow.csv")
                            ("../2_resource/flow_data/9.route_data.csv")
                            (csv_path_flow_2023, encoding="UTF-8")  
                            (csv_path_dist_flow, encoding="UTF-8")                  
                            (csv_path_verif_flow, encoding="UTF-8")



    - decribe use of Inspection_labor_hour.ipynb

        - populate dataframe from "../2_resource/maximo_labor_hour/Maximo_download.csv"
        - limit labor_hours dataframe to the following columns: "route", "location_id", "work_date", "mjuf_code", and "labor_hour"
        - calculate the total labor hours required per route
        - calculate the average hourly cost per route


- flow and pipe condition data preprocessed to populate risk prediction machine learning model.

- results from data processing and machine learning used to make visualisations in Tableau

​

​


### Data Retrieval and Processing


## Written Analysis
### Data Analysis


### Data Visualization



## Contributing 
{who can contribute to this project}

## Authors and acknowledgement
Eyasu Yilma and Erin Cooper

## Presentation
Presentation containing executive summary, overview of data, aproach to goals, conclusions, and next steps

### Notes and Challenges

## Contact
For questions about this project:
##### [email: erinaccooper@gmail.com](mailto:erinaccooper@gmail.com)
##### [email: eyasu.yilma@gmail.com](mailto:eyasu.yilma@gmail.com)