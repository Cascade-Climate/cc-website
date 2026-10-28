/** Copy from the LRM Cost Explorer user manual. */
export const manualTitle = "Lifecycle Refrigerant Management (LRM) Cost Explorer User Manual";

export const intro = [
  {
    "parts": [
      {
        "text": "The "
      },
      {
        "text": "Lifecycle Refrigerant Management (LRM) Cost Explorer",
        "href": "/our-work/refrigerant-management-and-transition/costs/explorer"
      },
      {
        "text": " is a free, interactive tool created by Cascade Climate that helps users estimate the operational (opex) and capital costs (capex) associated with recovering and responsibly managing refrigerants through recycling, reclamation, and destruction. Users enter details about their LRM scenario, which the tool combines with data from Cascade’s on-the-ground research and stakeholder conversations to generate detailed cost breakdowns across the refrigerant management value chain.",
        "bold": false
      }
    ]
  },
  {
    "parts": [
      {
        "text": "The LRM Cost Explorer is intended to provide insight into key cost drivers and how costs vary across scenarios. It does not provide definitive cost estimates or replace detailed, project-specific financial assessments.",
        "bold": false
      }
    ]
  },
  {
    "parts": [
      {
        "text": "This guide provides a step-by-step walkthrough of the inputs users are asked to provide and defines each of the terms used in the Explorer. It then explains the outputs of the Explorer, including formulas, data sources, and assumptions for each of the outputs. The primary outputs for the tool include: ‘Operational Costs’ per kg (USD/kg), ‘Annual Operational Costs’ (USD), and ‘Capital Costs’ (USD).",
        "bold": false
      }
    ]
  }
];

export const sections = [
  {
    "id": "sector-and-end-use-pathway-selection",
    "title": "1. Sector and End-Use Pathway Selection",
    "blocks": [
      {
        "type": "h2",
        "id": "sector-selection",
        "title": "a. Sector Selection"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "The LRM Cost Explorer (‘tool’) allows users to model refrigerant recovery scenarios (‘user scenarios’) in two sectors:",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "Residential Air Conditioning (AC)",
                "bold": true
              },
              {
                "text": ": This sector includes small-capacity air conditioning units (such as split heat pump units, self-contained window units, etc.) primarily used in residential households and small commercial businesses. Refrigerants are either recovered from (i) AC units on-site, or (ii) AC units that have been pumped down on-site and transported to a central facility for bulk refrigerant recovery.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "Commercial Heating, Ventilation, and Air Conditioning (HVAC)",
                "bold": true
              },
              {
                "text": ": This sector includes large-scale commercial and/or industrial units (such as commercial HVAC systems, chillers, variable refrigerant flow [VRF] systems, etc.) that require refrigerant recovery and extraction to be conducted on-site by technicians during decommissioning or servicing.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "h2",
        "id": "end-use-pathway-selection",
        "title": "b. End-Use Pathway Selection"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "After selecting a sector, the user is prompted to select their desired end-use pathway to model costs:",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "Recycling",
                "bold": true
              },
              {
                "text": ": The extraction and cleaning of recovered refrigerants for reuse, often in the same system, without bringing them to full AHRI 700 reclamation standard. A typical setup combines acid and moisture filters, an oil separator, a dryer or purifier using desiccants or molecular sieves, and a vacuum pump and cylinders for recharging the gas into the same or comparable equipment.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "Reclamation",
                "bold": true
              },
              {
                "text": ": The processing of recovered refrigerants to meet international purity standards such as AHRI 700 in a full-scale reclamation facility. The process generally involves four stages: initial filtering and drying to remove moisture and larger particles; separating mixtures and contaminants, through fractional distillation or molecular filtration; chemical treatment to neutralize acids and other impurities; and gas chromatography (GC) testing to confirm composition and purity. Simple distillation is the most common reclamation method worldwide. However, simple distillation typically requires recovered refrigerants to have ~98% purity, limiting its applicability for mixed or contaminated gas. Fractional distillation is a more complex process that can handle lower-purity refrigerants, but they are significantly more expensive to own and operate.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "Destruction",
                "bold": true
              },
              {
                "text": ": The permanent decomposition of refrigerants at a destruction facility using a technology that meets or exceeds the ",
                "bold": false
              },
              {
                "text": "Montreal Protocol's Technology and Economic Assessment Panel (TEAP) standards",
                "href": "https://ozone.unep.org/sites/default/files/2019-04/TEAP-DecXXIX4-TF-Report-April2018.pdf",
                "external": true
              },
              {
                "text": ". During the destruction process, refrigerant chemicals are broken down at very high temperatures, to a standard of decomposing at least 99.99 percent of the molecules for concentrated sources, with the by-products captured and treated. There are several TEAP-approved destruction technologies, including cement kiln, rotary kiln, argon plasma arc and municipal solid waste incineration.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "After making these two selections, users are directed to the Input section to model their desired user scenario.",
            "bold": false
          }
        ]
      }
    ]
  },
  {
    "id": "input-section",
    "title": "2. Input Section",
    "blocks": [
      {
        "type": "h2",
        "id": "recovery-inputs",
        "title": "a. Recovery Inputs"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "The input section prompts users to input data that the tool uses to calculate total recovery costs (covering recovery and transportation to a central facility) and the total amount of refrigerant recovered per year.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Default values"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Default values are pre-populated in the input section to act as guidance for users who may not have access to certain data points. Default values are based on estimated figures determined by Cascade through research and stakeholder conversations, and can be overridden by the user as necessary. Users can hover their cursor over an input to view its description and default values.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Average equipment charge size per unit (kg) and estimated percent of recoverable refrigerant per unit (%)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Average equipment charge size per unit and estimated percent of recoverable refrigerant per unit are included as inputs to capture the reality that the amount of refrigerant equipment is designed to hold is rarely the amount of refrigerant remaining in equipment during decommissioning or servicing. Operational leaks and partial venting occur over the equipment lifetime, sometimes significantly impacting the volume of refrigerant available during recovery. The tool uses different recoverable percentage default values for residential AC and commercial HVAC based on data gathered from the field.",
            "bold": false
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "For 'Residential AC': Average charge sizes for small capacity single-split AC units typically range between 0.5–1.5 kg, with multi-split units ranging from 1.0–3.0 kg. Since single split AC units are more widely used globally, the default value provided is 1.0 kg. The allowable charge size input range for this sector is greater than 0 and less than 10 kg. The default value provided for the estimated percentage of recoverable refrigerant per unit is 50%.",
            "bold": false
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "For ‘Commercial HVAC’: Average charge sizes for commercial ACs, rooftop units, and large chillers can range from 10 kg to hundreds of kg per unit. A conservative figure of 150 kg has been provided as default, with a recoverable rate of 80%. The allowable charge size input range for this sector is between 10 kg and 400 kg. A maximum limit for this input was set to avoid unrealistically high entries by users. For equipment that contains more than 400 kg of refrigerant, other inputs can be adjusted. If a user needs to model a recovery scenario from an 800 kg charge size system, users can provide the parameters required to recover 400 kg per day and input two recovery days instead of one when determining the ‘estimated number of recovery days per year’ field to fully capture the costs required.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Recovery machine type"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "This input refers to the type of machine used to extract refrigerant.",
            "bold": false
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Basic: This option refers to the standard compact recovery machines typically used to recover refrigerant from small capacity AC units, and not from large commercial HVAC systems. Therefore, the ‘Basic’ option will not be applicable if the ‘Commercial HVAC’ sector is selected.",
            "bold": false
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "High capacity: This option refers to high speed recovery machines that are usually used for larger equipment within the commercial HVAC sector, but are also capable of recovering refrigerant from multiple small capacity AC units simultaneously in certain set ups. ‘High Capacity’ is the default for ‘Commercial HVAC’ but may also be selected for ‘Residential AC’.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Estimated time needed for recovery per unit (hours) and hourly labor cost rate per unit (USD/hour)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "This input refers to the total time required for recovery from set up to completion.",
            "bold": false
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Guidance for ‘Residential AC’:",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "On average, the estimated time needed for recovery from a 1 kg capacity unit:",
                "bold": false
              }
            ],
            "children": [
              {
                "parts": [
                  {
                    "text": "If 'Basic' equipment is selected, about 30-45 minutes (0.5–0.75 hours)",
                    "bold": false
                  }
                ],
                "children": []
              },
              {
                "parts": [
                  {
                    "text": "If 'High Capacity' equipment is selected, 15-30 minutes (0.25–0.5 hours)",
                    "bold": false
                  }
                ],
                "children": []
              }
            ]
          },
          {
            "parts": [
              {
                "text": "A default value of 0.5 hours has been set for the ‘recovery time needed per unit’ field for both ‘Basic’ and ‘High Capacity’ equipment selections, but can be changed by users as required. The input range is greater than 0 and less than 4 hours.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "If units are first being pumped down on-site (see note below), the time taken for this activity should also be factored in (approximately 5-10 minutes per unit).",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "The default value provided for ‘Hourly labor cost rate per unit’ is USD 10/hour.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Note",
            "bold": true
          },
          {
            "text": ": The pump-down procedure is a technique that uses basic service tools and the AC system’s internal compressor to isolate and transfer the entire refrigerant charge inside the system’s high-pressure side—specifically within the outdoor condenser unit—instead of using recovery equipment to extract it into an external storage cylinder. The outdoor condenser unit can then be disconnected from the system without refrigerant being vented. It is brought to a central facility where the refrigerant is recovered. For compatible residential split AC systems, some recovery programs adopt this method to reduce on-site technician labor hours and eliminate the need to transport heavy recovery machines, cylinders, and related equipment to each site. This approach may offer overall time and cost savings, particularly when multiple units are collected per job, although these benefits depend on transportation logistics and collection volumes. Pump-down may not be suitable for all residential AC unit types and generally requires a functioning compressor and compatible system design. Where pump-down is not feasible, refrigerant must be recovered directly into external cylinders using appropriate recovery equipment.",
            "bold": false
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Guidance for ‘Commercial HVAC’:",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "Recovery time can vary widely for commercial HVAC systems depending on the equipment type. For the ‘recovery time needed per unit (hours)’ field, an input range of greater than 0 and less than 12 hours has been set, with the upper limit based on the maximum number of hours a recovery team might realistically work in a single day. As guidance, the default value of 8 hours is used, roughly the time needed for recovery from a 150 kg commercial chiller.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "For recovery jobs that may require more than 12 recovery hours per day, users should adjust the ‘estimated number of recovery days per year’ and ‘average charge size of targeted equipment per unit (kg)’ to account for this, as needed. For example, for a 300 kg system that requires 24 hours for recovery, users can input the recovery parameters for a 150 kg system, 12-hour recovery day and indicate two days in the ‘estimated number of recovery days per year’ field.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "The default value provided for ‘Hourly labor cost rate per unit’ is USD 20/hour. This assumes that two technicians are required at USD 10/hour.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "h4",
        "title": "Average number of units recovered per day"
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "The default value provided for ‘Residential AC’ is 40 units per day.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "The default value provided for ‘Commercial HVAC’ is 1 unit per day",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "h4",
        "title": "Fuel efficiency of vehicle used (km/L) and Fuel price (USD/L)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Users should consider the type of vehicle used by recovery teams to travel to the recovery site, and to the central facility, as well as the average local fuel price rates. The default input values provided for fuel price, vehicle fuel efficiency and average distance traveled per team were based on estimated averages through Cascade’s stakeholder conversations in Southeast Asia. Users are encouraged to consider local rates and conditions when determining the relevant inputs used for the calculation of this value.",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "The default value provided for ‘Fuel efficiency of vehicle used (km/L)’ is 8.5 km/L (for a small lorry/truck)",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "The default value provided for ‘Fuel price (USD/L)’ is USD 1.50/L",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "h4",
        "title": "Number of recovery teams mobilized per day"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Users provide the expected number of teams that will be deployed for recovery per day. This selection impacts both operational costs (labor and transportation costs) and capital cost calculations (recovery equipment required). The default value used for ‘Residential AC’ is based on the assumption of one team per 10 units recovered per day, and one team per one unit recovered per day for ‘Commercial HVAC’.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Average distance traveled per team (km/day)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Users provide the estimated distance that each team is required to travel to complete their expected recovery loads per day. This distance should include travel from departure to the recovery site and onward to the central facility. The default value provided for both sectors is 100 km.",
            "bold": false
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "When determining this input, the central question users should consider is how many units will be available for recovery at each location that a team travels to. For example, recovering 10 residential AC units from one location vs. 10 units from 10 different locations will impact the total distance traveled significantly.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Labor cost for traveling time per day (USD/day)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "To account for the labor cost incurred for a technician’s traveling time, the model will provide a calculated figure based on the user’s inputs for average distance traveled per team and hourly labor cost rate, as well as an estimated overall travel speed of 80 km/hour during jobs. The formula for this field is as follows:",
            "bold": false
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Labor cost for traveling time per day (USD/day) = ((Average distance traveled per team (km) x Number of recovery teams mobilized per day) / 80 (km/hour)) x Hourly labor cost rate per unit (USD/hour)",
            "bold": false
          }
        ],
        "formula": true
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "This figure will then be added to on-site labor cost to provide the ‘Total labor cost per day’ (USD/day) value as displayed in the Input section.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Estimated number of recovery days per year"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "This input refers to the estimated number of days that recovery activities are anticipated to take place. In general, the expected number of units available for recovery per year should, theoretically, be higher for the residential AC sector compared to the commercial HVAC sector, since the residential AC sector has a larger installed base and units within this sector are more frequently replaced. Thus, the following defaults have been provided as guidance, which can be adjusted by users.",
            "bold": false
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Default for ‘Residential AC’: 200 days per year",
            "bold": false
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Default for ‘Commercial HVAC’: 75 days per year",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Central facility storage (USD per month)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Users should provide the estimated cost required to rent/own a central facility for storage, recovery and bulk consolidation activities. A default figure of USD 1,000 per month has been set, but should be adjusted based on local rates.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Tracking & monitoring system (USD)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Establishing a reliable chain of custody is crucial for any LRM initiative; thus, users should consider the cost required to develop and implement a monitoring system capable of tracking refrigerants throughout the entire process from recovery to end-use. The default value provided is USD 50,000.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Cost scenarios (to determine central facility activities & end-use processing costs)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "To estimate the costs that come after recovery (central facility operations, transport and handling to the end-use facility, and end-use processing), the model uses a cost scenario-based approach. Each of these cost components has an estimated cost for each of the three cost scenarios, and the model applies the estimated cost that matches the scenario. The consideration that drives the cost scenario decision is the scale of the LRM program in terms of the total amount of refrigerant recovered per year. The higher the volume, the lower the cost, given economies of scale.",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "'Low' represents the lowest end of the cost range, corresponding to more than 50 metric tonnes per year of refrigerant recovered.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "'Medium' represents the midpoint of the cost range, corresponding to between 10 and 50 metric tonnes per year of refrigerant recovered.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "'High' represents the highest end of the cost range, corresponding to less than 10 metric tonnes per year of refrigerant recovered.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "That said, users are given the option to select their preferred cost scenario based on personal judgment of their project’s anticipated circumstances as well as the policy and infrastructure landscape of their respective geographies.",
            "bold": false
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "This approach was taken due to the nature and sensitivity of the data that was made available to Cascade during the data collection process. The cost ranges used are aggregated averages based on a combination of primary stakeholder input and secondary research from publicly-available data.",
            "bold": true
          }
        ]
      },
      {
        "type": "h2",
        "id": "end-use-pathway-specific-inputs",
        "title": "b. End-Use Pathway-Specific Inputs"
      },
      {
        "type": "h3",
        "id": "for-destruction",
        "title": "i. For Destruction"
      },
      {
        "type": "h4",
        "title": "Destruction technology"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "When the Destruction end-use is selected, users are prompted to select a ‘Destruction Technology’ in the Input section. There are three options: ‘Rotary Kiln Incineration’, ‘Cement Kiln Incineration’ and ‘Plasma Arc’. Only these options have been included based on existing infrastructure availability and potential accessibility.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Facility status"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "If the end-use facility needs to be newly constructed, the user should select ‘New facility’. If there is existing infrastructure that can undergo retrofitting, the user should select ‘Retrofit’. If refrigerants are sent to an existing facility without the need for retrofitting, the user should select ‘Existing’. Note:",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "‘Plasma Arc’ destruction technology has no retrofit option. Retrofit is not applicable when ‘Plasma Arc’ is selected.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "For Reclamation, the ‘Retrofit’ option is not available – ‘New facility’ and ‘Existing’ are the only options, with ‘New facility’ assumed as the default.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "For ‘Recycling’, this input will not be applicable since the recycled refrigerant is reused on-site.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "h4",
        "title": "Location (In-country/Exported)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "This input determines whether the recovered refrigerant’s processing will be conducted domestically or if it needs to be delivered or shipped to another country for processing. The user’s selection will impact the cost range used for the ‘Transport & handling to end-use facility’ operational cost, which is included in the ",
            "bold": false
          },
          {
            "text": "data reference sheet",
            "href": "/LRM-Cost-Explorer-Data-Reference-Sheet.pdf",
            "external": true
          },
          {
            "text": " (refer to note in the Output section write up below for details about this sheet). For the ‘Recycling’ pathway, it is assumed that processing costs will be zero since the recycled refrigerant is directly reused on-site and will not need to be transported to a processing facility.",
            "bold": false
          }
        ]
      },
      {
        "type": "h3",
        "id": "for-reclamation",
        "title": "ii. For Reclamation"
      },
      {
        "type": "h4",
        "title": "Facility status"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "See description above.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Location (In-country/Exported)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "See description above.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Blended sale price of reclaimed refrigerants (USD/kg)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Blended sale price of reclaimed refrigerants – The entered value will offset the total gross opex costs (e.g., if USD 5/kg is entered, total gross operating costs will be reduced by USD 5/kg). When determining this input, users should also consider the expected profit margin. A default value of USD 5/kg has been set for this input as guidance, but geography-specific pricing data should be used whenever possible. When recovering multiple types of refrigerant, a blended average of the USD/kg for each gas type should be used.",
            "bold": false
          }
        ]
      },
      {
        "type": "h3",
        "id": "for-recycling",
        "title": "iii. For Recycling"
      },
      {
        "type": "h4",
        "title": "Price of virgin refrigerant avoided (USD/kg)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Blended price of virgin refrigerant avoided – The entered value will offset the total gross opex costs based on the assumption that savings from the purchase of new refrigerant can be achieved by recycling and reusing existing gases directly. A default value of USD 5/kg has been set for this input as guidance.",
            "bold": false
          }
        ]
      },
      {
        "type": "h2",
        "id": "refrigerant-mix-input",
        "title": "c. Refrigerant Mix Input"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "This section allows users to provide an estimated percentage breakdown (%) of the different refrigerant types recovered from their modeled user scenario. These figures have no impact on opex and capex costs, but contribute towards the figures shown in the climate impact values in the Output section (only shown when 'Destruction' is selected - explained below). This section uses the weighted average Global Warming Potential (GWP) of the refrigerant mix to provide a USD per metric tonne of carbon dioxide equivalent (USD/tCO2e) estimate. This cost can serve as a reference point to compare against if the user is planning to leverage carbon finance for their respective programs.",
            "bold": false
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Users can enter their actual or desired percentage mix (must equal 100% in total), although default values for each sector are provided based on a calculated average from best available data sources and stakeholder conversations. These default values were developed based on the Southeast Asia HVAC market, so we encourage users to input refrigerant mix percentages specific to their country or region. Please note, this version of the tool only includes R32, R410a, and R22 as possible gases in the mix.",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "The default percentage refrigerant mix for ‘Residential AC’ provided is R32 (38%), R410A (50%), R22 (12%).",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "The default percentage refrigerant mix for ‘Commercial HVAC’ provided is R32 (5%), R410A (65%), R22 (30%).",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "In this tool, GWP-100 values are referenced, where:",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "GWP-100 for R32 (kg CO2e / kg) = 771",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "GWP-100 for R410A (kg CO2e / kg) = 2,256",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "GWP-100 for R22 (kg CO2e / kg) = 1,960",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      }
    ]
  },
  {
    "id": "output-section",
    "title": "3. Output Section",
    "blocks": [
      {
        "type": "h2",
        "id": "overview",
        "title": "a. Overview"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "After entering information into the Input section, the user can click the ",
            "bold": false
          },
          {
            "text": "‘Calculate costs’",
            "bold": true
          },
          {
            "text": " button at the bottom right corner of the Input section, which generates cost calculations that appear on the right-hand side of the display. Users may go back to the Input section at any time, adjust any values, and click ‘Recalculate’ to update the Outputs.",
            "bold": false
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "At the top of the Output section will be a summary of the key figures: ‘Total amount of refrigerant recovered per year’ (kg/year), ‘Operational Costs’ (USD/kg), ‘Capital Costs’ (USD), and ‘Total net operational costs per year’ (USD). The ‘Cost per Tonne CO2 Equivalent’ (USD/tCO2e) output is calculated only for the 'Destruction' pathway, given that only destruction mitigates the climate impact of the refrigerant completely, whereas reclamation or recycling results in a deferral of climate impact. The calculated ‘Cost per Tonne CO2 Equivalent’ output does not take into account a comprehensive Life Cycle Assessment (LCA).",
            "bold": false
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Below the summary, the user can toggle between ‘Operational Costs’ and ‘Capital Costs’ to view graphical breakdowns of each. The charts show the main cost components that make up total operational or capital costs. Each main cost component (described in depth below) is clickable in the graphs. When clicked, the user can learn more about sub-costs included in each main cost component. When the ‘Operational Costs’ Toggle is selected, the cost breakdown is displayed as a waterfall bar chart. When the ‘Capital Costs’ Toggle is selected, the cost breakdown is displayed as a stacked bar chart.",
            "bold": false
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "At the bottom of the Output Section, the tool will also display a \"Pathway Comparison\" chart, comparing the opex for the same recovered refrigerant scenarios across different end-use pathways (Destruction, Reclamation, and Recycling).",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Cost calculation methods"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "In general, cost estimates for individual cost components are computed via one of two methods:",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "Calculated via a formula",
                "bold": true
              },
              {
                "text": " based directly on the input variables entered by the user (or the default values). For example, recovery labor costs are calculated using information inputted by the user such as recovery time, labor hourly rate, etc. In this case, the tool does not source from Cascade’s ",
                "bold": false
              },
              {
                "text": "data reference sheet",
                "href": "/LRM-Cost-Explorer-Data-Reference-Sheet.pdf",
                "external": true
              },
              {
                "text": " to determine costs and uses only the information entered into the Input section.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "Estimated from Cascade’s data reference sheet. ",
                "bold": true
              },
              {
                "text": "Cascade collected data from stakeholder interviews and field visits to LRM facilities in Southeast Asia, which we compiled into the ",
                "bold": false
              },
              {
                "text": "data reference sheet",
                "href": "/LRM-Cost-Explorer-Data-Reference-Sheet.pdf",
                "external": true
              },
              {
                "text": ". All sources have been anonymized and all cost components (e.g., destruction processing cost/kg) appear as a range of values rather than a single value that can be attributed to a specific source. For cost components that cannot be calculated directly by formula, the tool references the cost component in the data reference sheet, and refers to a value based on the cost scenario (high, medium, or low) determined by the user.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "ai-note",
        "text": "Cascade Climate used Cursor, an AI-powered code editor, to support the development of the LRM Cost Explorer’s user interface. AI was not used to collect or generate data or develop the tool’s calculation logic, which was built in Excel. Our team reviewed the Explorer’s outputs against the original Excel model to verify their accuracy and integrity."
      },
      {
        "type": "h2",
        "id": "operational-costs-toggle-usd-kg",
        "title": "b. Operational Costs Toggle (USD/kg)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Below we describe each of the main cost components and their sub-costs that make up ‘Operational Costs’.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "For Reclamation only: Sale price of reclaimed refrigerants"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "See description in the Input section. This cost component is displayed as a “negative cost” in the graphical output and numerical cost breakdown, as it is a source of revenue that reduces total net costs.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "For Recycling only: Price of virgin refrigerant avoided"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "See description in the Input section. ‘Price of virgin refrigerant avoided’ is also displayed as a “negative cost” in the Output section.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "End-use processing"
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "What it includes: ",
                "bold": true
              },
              {
                "text": "Operational cost of the facility required to process refrigerants based on the end-use selected (either destruction or reclamation).",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "How it’s calculated: ",
                "bold": true
              },
              {
                "text": "Values sourced from the ",
                "bold": false
              },
              {
                "text": "data reference sheet",
                "href": "/LRM-Cost-Explorer-Data-Reference-Sheet.pdf",
                "external": true
              },
              {
                "text": " based on the determined cost scenario.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "Notes and assumptions: ",
                "bold": true
              },
              {
                "text": "Under ‘Destruction’, rotary and cement kiln incineration are currently the most commonly available technology for refrigerant destruction in Article 5 countries and are expected to have a similar destruction cost per kg range.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "For ‘Reclamation’, the model only includes opex and capex cost estimates for basic, single-component reclamation and not advanced, fractional distillation facilities. This approach was adopted based on stakeholder feedback and research on existing refrigerant processing facilities within Southeast Asia, which indicates that fractional distillation is, at present, not considered economically viable in the region.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Transport and handling to end-use facility"
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "What it includes: ",
                "bold": true
              },
              {
                "text": "Logistics costs required to transport recovered and aggregated refrigerants from a central facility to an end-use processing (i.e. destruction or reclamation) facility. Since refrigerants will be transported in bulk — typically in large cylinders and/or tonne tanks — at this stage, per kg transportation costs will be much lower than transportation from the point of recovery to the central facility.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "How it’s calculated: ",
                "bold": true
              },
              {
                "text": "Values sourced from the ",
                "bold": false
              },
              {
                "text": "data reference sheet",
                "href": "/LRM-Cost-Explorer-Data-Reference-Sheet.pdf",
                "external": true
              },
              {
                "text": " based on the cost scenario.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "Notes and assumptions: ",
                "bold": true
              },
              {
                "text": "Two different cost ranges are used depending on whether aggregated refrigerants are transported within the same country (‘In-Country’) or need to be delivered to another country (‘Exported’) for processing. The cost range for the ‘Exported’ option is estimated to be significantly higher, taking into account cross-border shipping costs as well as any additional fees related to international trade including obligations under the Basel Convention (on the Control of Transboundary Movements of Hazardous Wastes and their Disposal), where applicable.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "h4",
        "title": "Central facility storage and operations"
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "What it includes: ",
                "bold": true
              },
              {
                "text": "The cost to aggregate and store refrigerant at a central facility before it is transported to a destruction or reclamation facility. This includes both a monthly rental cost for space in a warehouse and operational labor costs for bulk consolidation of refrigerants into larger cylinders and/or tonne tanks.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "How it’s calculated: ",
                "bold": true
              },
              {
                "text": "Central facility costs (USD/kg) = Central facility storage costs (USD/kg) + Central storage facility operational costs (USD/kg)",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Where:",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "Central facility storage costs (USD/kg) = (Central facility storage (USD/month) x 12 months) / Total amount of refrigerant recovered per year (kg/year).",
                "bold": false
              }
            ],
            "children": [
              {
                "parts": [
                  {
                    "text": "Central storage facility operational costs (USD/kg) is sourced from the ",
                    "bold": false
                  },
                  {
                    "text": "data reference sheet",
                    "href": "/LRM-Cost-Explorer-Data-Reference-Sheet.pdf",
                    "external": true
                  },
                  {
                    "text": ", based on the cost scenario.",
                    "bold": false
                  }
                ],
                "children": []
              }
            ]
          },
          {
            "parts": [
              {
                "text": "Notes and assumptions: ",
                "bold": true
              },
              {
                "text": "Monthly storage costs assume that there is a standard monthly rate to utilize space in a warehouse. Central facility costs are set to zero for ‘Recycling’ scenarios since recycled refrigerant will be reused on site.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "h4",
        "title": "Recovery"
      },
      {
        "type": "h4",
        "title": "Recovery labor"
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "What it includes: ",
                "bold": true
              },
              {
                "text": "The cost of technician labor to identify and extract gas from units as well as labor cost incurred for traveling time.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "How it’s calculated: ",
                "bold": true
              },
              {
                "text": "Total recovery labor cost per day (USD/day) = On-site labor cost (USD/day) + Labor cost for traveling time (USD/day)",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Where:",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "On-site labor cost (USD/day) = (Hourly labor cost (USD/hr) x Recovery time needed per unit (hr/unit)) x Average number of units recovered per day (unit/day)",
                "bold": false
              }
            ],
            "children": [
              {
                "parts": [
                  {
                    "text": "Labor cost for traveling time (USD/day) = ((Average distance traveled per team (km) x Number of recovery teams mobilized per day) / 80 (km/hour)) x Hourly labor cost rate per unit (USD/hour)",
                    "bold": false
                  }
                ],
                "children": []
              }
            ]
          },
          {
            "parts": [
              {
                "text": "Notes and assumptions: ",
                "bold": true
              },
              {
                "text": "For ‘Recycling’ scenarios, it is assumed that additional time will be required by technicians to put recovered refrigerant through a basic cleaning process before being refilled back into the equipment. Due to a lack of information on how long this process actually takes in practice and how technicians consider this from a cost perspective, this model currently adds an additional 50% of the user scenario’s on-site recovery labor cost to account for this, which is indicated in the ‘Additional costs for recycling’ output.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "h4",
        "title": "Recovery transportation"
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "What it includes: ",
                "bold": true
              },
              {
                "text": "The cost of transporting recovered refrigerant from the site to a central facility. This cost is calculated using fuel prices, vehicle fuel efficiency, and the distance technician teams need to travel to recover refrigerant. It does not include transport from a central facility to the reclamation or destruction facility.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "How it’s calculated: ",
                "bold": true
              },
              {
                "text": "Transportation cost/day = (fuel prices (USD/L) / vehicle fuel efficiency (km/L)) x average distance traveled per team per day (km) x average number of teams mobilized per day",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "Notes and assumptions: ",
                "bold": true
              },
              {
                "text": "The default input values provided for fuel price, vehicle fuel efficiency and average distance traveled per team were based on estimated averages through Cascade’s stakeholder conversations in Southeast Asia. Users are encouraged to consider local rates and conditions when determining the relevant inputs used for the calculation of this value.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "h4",
        "title": "Total net opex (USD/kg) and Total net opex per year (USD)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Total gross opex (USD/kg) = Sum total of costs for Recovery + Central facility + Transport & handling to End-use facility + Post-recovery Processing",
            "bold": false
          }
        ],
        "formula": true
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "For Destruction: Total net opex = Total gross opex.",
            "bold": false
          }
        ],
        "formula": true
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "For Reclamation: Total net opex = Total gross opex - Sale price of reclaimed refrigerant.",
            "bold": false
          }
        ],
        "formula": true
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "For Recycling: Total net opex = Total gross opex - Virgin refrigerant savings from recycling (avoided purchase).",
            "bold": false
          }
        ],
        "formula": true
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Total net opex per year (USD) = Total net opex (USD/kg) x Total refrigerant recovered per year (kg/year).",
            "bold": false
          }
        ],
        "formula": true
      },
      {
        "type": "h2",
        "id": "capital-costs-toggle-usd",
        "title": "c. Capital Costs Toggle (USD)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Below we describe each of the main cost components and their sub-costs that make up ‘Capital Costs’.",
            "bold": false
          }
        ]
      },
      {
        "type": "h4",
        "title": "Administration and licensing"
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "What it includes",
                "bold": true
              },
              {
                "text": ": Licensing and any administrative costs required for the establishment of new and/or retrofitted facilities.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "How it’s calculated",
                "bold": true
              },
              {
                "text": ": Currently fixed at an estimated lump sum price of USD 10,000 for all modeled user scenarios.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "Notes and assumptions: ",
                "bold": true
              },
              {
                "text": "This cost will only be applicable for ‘New facility’ and ‘Retrofit’ user scenarios. The amount will be set to zero if ‘Existing’ is selected.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "h4",
        "title": "Destruction or reclamation facility (depending on end-use pathway selected)"
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "What it includes: ",
                "bold": true
              },
              {
                "text": "Total cost for either building a brand new facility (for ‘Destruction’ or ‘Reclamation’) or retrofitting an existing facility to be suitable for end-use processing (for ‘Destruction’ only).",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "How it’s calculated: ",
                "bold": true
              },
              {
                "text": "Sourced from the ",
                "bold": false
              },
              {
                "text": "data reference sheet",
                "href": "/LRM-Cost-Explorer-Data-Reference-Sheet.pdf",
                "external": true
              },
              {
                "text": ". Capex costs for new destruction and retrofit facilities reference published figures (",
                "bold": false
              },
              {
                "text": "TEAP",
                "href": "https://ozone.unep.org/system/files/documents/TEAP-May2024-DecXXXV-11-TF-Report.pdf",
                "external": true
              },
              {
                "text": ") in addition to direct stakeholder feedback. The 'Retrofit' option is only available for cement kiln incinerator and rotary kiln incinerator for destruction, since those are facilities that currently operate for other purposes but can be retrofitted with refrigerant destruction capabilities. The 'Retrofit' option is not applicable for ‘Plasma Arc’ destruction technology or reclamation facilities in this model. Facility capex will be set to zero for the ‘Recycling’ pathway, since no separate processing at an external facility is required, as well as for user scenarios where the ‘Existing’ option is selected.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "The number of facilities required per program is based on the estimated processing capacities of each facility per year:",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "Estimated destruction capacity for all destruction technology types: 80,000 kg (80 metric tonnes) per year.",
                "bold": false
              }
            ],
            "children": [
              {
                "parts": [
                  {
                    "text": "Calculation for number of facilities: One for every increment of 80,000 kg of total amount of refrigerant volume recovered per year (kg); i.e. 0–80,000 kg = 1 unit; 80,000–160,000 kg = 2 units, etc.",
                    "bold": false
                  }
                ],
                "children": []
              }
            ]
          },
          {
            "parts": [
              {
                "text": "Estimated capacity for basic reclamation facility: 150,000 kg (150 metric tonnes) per year.",
                "bold": false
              }
            ],
            "children": [
              {
                "parts": [
                  {
                    "text": "Calculation for number of facilities: One for every increment of 150,000 kg of total amount of refrigerant volume recovered per year (kg); i.e. 0–150,000 kg = 1 unit; 150,000–300,000 kg = 2 units, etc.",
                    "bold": false
                  }
                ],
                "children": []
              }
            ]
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "For the ‘Reclamation’ pathway, additional capex cost components required include:",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "Reclamation facility operators: Estimated three (3) full time operators required per reclamation facility. Training costs needed per operator are based on estimated figures provided by the Montreal Protocol TEAP’s 2024 report.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "Full gas chromatography laboratory: Housed within the facility and equipped based on AHRI 700 standards. One unit required per facility.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "Notes and assumptions: ",
                "bold": true
              },
              {
                "text": "At present, the capex and opex costs for ‘Rotary kiln incineration’ and ‘Cement kiln incineration’ use the same values based on best available data.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "h4",
        "title": "Tracking and monitoring system"
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "What it includes",
                "bold": true
              },
              {
                "text": ": The cost required to develop and set up a full-scale monitoring system capable of tracking refrigerants throughout the entire process from recovery to end-use processing.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "How it’s calculated",
                "bold": true
              },
              {
                "text": ": Based on the user’s manual input.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "Notes and assumptions: ",
                "bold": true
              },
              {
                "text": "Tracking and monitoring systems are essential for ensuring refrigerant is being responsibly handled at each part of the process. These systems may be app-based or paper-based, and typically involve documentation of refrigerant weights at the point of recovery, aggregation, and end-use processing through time-stamped photographs and/or cylinder bar codes. Tracking and monitoring systems tend to be customized for each user’s operations, and are therefore included as a user input in the tool.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "h4",
        "title": "Recovery equipment"
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "What it includes: ",
                "bold": true
              },
              {
                "text": "Equipment used for recovering and storing refrigerant gas. This includes recovery machines, recovery cylinders, refrigerant identifiers, and accessories such as vacuum pumps, scales, manifold gauges, and sensors.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "How it's calculated: ",
                "bold": true
              },
              {
                "text": "Based on the user’s inputs, the model will determine the estimated number of units required for each type of equipment and output cost figures based on the per unit equipment cost in the ",
                "bold": false
              },
              {
                "text": "data reference sheet",
                "href": "/LRM-Cost-Explorer-Data-Reference-Sheet.pdf",
                "external": true
              },
              {
                "text": ". These are calculated estimates based on the following formulas:",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Recovery machines",
            "bold": true
          },
          {
            "text": ":",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "‘Residential AC’ > ‘Basic’: Number of machines is directly proportional to the ‘number of recovery teams mobilized per day’ input (i.e., 5 teams require 5 machines).",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "‘Residential AC’ > ‘High Capacity’: One unit for every increment of 10,000 kg of ‘total amount of refrigerant recovered per year (kg)’; i.e. 0 - 10,000 kg = 1 unit; 10,000 - 20,000 kg = 2 units, etc.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "‘Commercial HVAC’ > ‘High Capacity’: Number of machines is directly proportional to the ‘number of recovery teams mobilized per day’ input (i.e., 2 teams require 2 machines).",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "Notes and assumptions: ",
                "bold": true
              },
              {
                "text": "For residential AC, basic recovery machines are typically used. However, based on feedback from stakeholders operating existing recovery initiatives, using high capacity machines to do bulk recovery from multiple residential AC units simultaneously at a central facility is an alternative approach that could potentially improve recovery efficiency.  For the commercial HVAC sector where recovery strictly needs to be done on-site, high capacity recovery machines are typically used due to the large charge sizes of equipment involved.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "For the ‘Recycling’ pathway under ‘Commercial HVAC’ user scenarios, the capex cost of high-capacity recycling equipment uses the same cost amount as regular high-capacity recovery machines, based on the assumption that these machines include a built-in recycling function.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Recovery accessories",
            "bold": true
          },
          {
            "text": ":",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "The amount of recovery accessory sets required, whether basic or high capacity, will always equal the number of corresponding recovery machines needed (i.e. one basic recovery accessory set for every unit of basic recovery machine needed), since these tools will always be needed for recovery work.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "If ‘Basic’ is the selected option for recovery machine type, ‘High Capacity’ machine and accessories outputs will not be applicable for the modeled user scenario, and vice versa. The only exception is for a ‘Residential AC’ sector > ‘High Capacity’ recovery machine type scenario, where basic recovery accessories will be included in calculations based on the number of recovery teams mobilized per day as determined by the user. This is due to the fact that the use of high capacity machines for recovery in the residential AC sector usually involves residential AC units being first pumped down on-site and aggregated at a central facility for bulk recovery to be done at the facility itself. Therefore, technician teams will still require basic accessories to conduct pump down activities.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Recovery cylinders and tonne tanks",
            "bold": true
          },
          {
            "text": ":",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "To determine the number of cylinders needed, some basic assumptions were made:",
                "bold": false
              }
            ],
            "children": [
              {
                "parts": [
                  {
                    "text": "Both small (~10 kg capacity) and large (~50 kg capacity) cylinders are required for each modeled scenario, as well as tonne tanks.",
                    "bold": false
                  }
                ],
                "children": []
              },
              {
                "parts": [
                  {
                    "text": "‘Residential AC’ sector scenarios will generally utilize more small cylinders, and ‘Commercial HVAC’ sector scenarios will need more large cylinders.",
                    "bold": false
                  }
                ],
                "children": []
              },
              {
                "parts": [
                  {
                    "text": "Both small and large recovery cylinders can be used for 3 refill cycles per year, and tonne tanks for 2 refill cycles per year. One refill cycle refers to one round of filling and complete emptying of a cylinder.",
                    "bold": false
                  }
                ],
                "children": []
              }
            ]
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "For the ‘Residential AC’ sector, the number of small cylinders required will be estimated based on 70% of the total amount of refrigerant recovered per year, and large cylinders based on 30% of the amount.",
                "bold": false
              }
            ],
            "children": [
              {
                "parts": [
                  {
                    "text": "Number of small recovery cylinders (12L/~10 kg capacity) needed = ((Amount of refrigerant volume recovered per year (kg) x 0.7) / 10 (kg)) / 3 (refill cycles per year), rounded up to the nearest whole number.",
                    "bold": false
                  }
                ],
                "children": []
              },
              {
                "parts": [
                  {
                    "text": "Number of large recovery cylinders (60L/~50 kg capacity) needed = ((Amount of refrigerant volume recovered per year (kg) x 0.3) / 50 (kg)) / 3 (refill cycles per year), rounded up to the nearest whole number.",
                    "bold": false
                  }
                ],
                "children": []
              }
            ]
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "For the ‘Commercial HVAC’ sector, the proportions are swapped (70% for large cylinders, 30% for small), as below:",
                "bold": false
              }
            ],
            "children": [
              {
                "parts": [
                  {
                    "text": "Number of small recovery cylinders (12L/~10 kg capacity) needed = ((Amount of refrigerant volume recovered per year (kg) x 0.3) / 10 (kg)) / 3 (refill cycles per year), rounded up to the nearest whole number.",
                    "bold": false
                  }
                ],
                "children": []
              },
              {
                "parts": [
                  {
                    "text": "Number of large recovery cylinders (60L/~50 kg capacity) needed = ((Amount of refrigerant volume recovered per year (kg) x 0.7) / 50 (kg)) / 3 (refill cycles per year), rounded up to the nearest whole number.",
                    "bold": false
                  }
                ],
                "children": []
              }
            ]
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "As for the number of tonne tanks (~600 kg capacity) required, estimations will be the same for both sectors:",
                "bold": false
              }
            ],
            "children": [
              {
                "parts": [
                  {
                    "text": "Number of tonne tanks needed = (Amount of refrigerant volume recovered per year (kg) / 600 (kg) / 2 (refill cycles per year)), rounded up to the nearest whole number.",
                    "bold": false
                  }
                ],
                "children": []
              }
            ]
          }
        ]
      },
      {
        "type": "h4",
        "title": "Refrigerant Identifiers"
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "Refrigerant identifiers are typically used at the point of recovery. Thus, the number of units required is estimated based on one unit for every set of recovery machines needed (both sectors).",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "h4",
        "title": "Total Capex (USD)"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "Total Capex (USD) = Total Recovery Capex + Total Destruction/Reclamation Capex",
            "bold": false
          }
        ],
        "formula": true
      },
      {
        "type": "h2",
        "id": "end-use-pathway-comparison-charts",
        "title": "d. End-use Pathway Comparison Charts"
      },
      {
        "type": "p",
        "parts": [
          {
            "text": "The total net operational costs (USD/kg) comparison chart presents the selected end-use pathway alongside its alternatives, calculated using the same input parameters, so a user can quickly compare the cost implications of choosing a different end-use. Points to note:",
            "bold": false
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "‘Recycling’ appears as a comparison pathway only for the ‘Commercial HVAC’ selection; the tool does not include it as an option for ‘Residential AC’.",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      },
      {
        "type": "ul",
        "items": [
          {
            "parts": [
              {
                "text": "Whenever ‘Destruction’ is shown as an alternative for comparison (which means the user selects either ‘Reclamation’ or ‘Recycling’), cost figures in the ‘Destruction’ chart will be based on the ‘Destruction > Rotary Kiln’ cost combination.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "Reclamation comparison charts will always use USD 5 as the default value for the ‘Blended sale price of reclaimed refrigerants’ input in its calculations.",
                "bold": false
              }
            ],
            "children": []
          },
          {
            "parts": [
              {
                "text": "Recycling comparison charts will always use USD 5 as the default value for ‘Price of virgin refrigerant avoided.’",
                "bold": false
              }
            ],
            "children": []
          }
        ]
      }
    ]
  }
];

export const navItems = sections.flatMap((section) => {
	const items = [{ id: section.id, title: section.title, sub: false }];
	for (const block of section.blocks) {
		if (block.type === 'h2') items.push({ id: block.id, title: block.title, sub: true });
	}
	return items;
});
