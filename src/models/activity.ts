export interface Activity {
  id: string;
  account: string;
  employer: string;
  link_item: string;
  data_partner: string;
  created_at: string;
  updated_at: string;
  status: string;
  type: string;
  num_tasks: number;
  start_date: string;
  end_date: string;
  all_timestamps: AllTimestamps;
  all_datetimes: AllDatetimes;
  duration: number;
  timezone: string;
  earning_type: string;
  start_location: Location;
  end_location: Location;
  route: string;
  distance: string;
  distance_unit: string;
  complete_data_available: boolean;
  metadata: any;
  circumstances: Circumstances;
  income: Income;
  income_rates: IncomeRates;
}

export interface AllDatetimes {
  request_at: string | null;
  accept_at: string | null;
  pickup_at: string | null;
  dropoff_at: string | null;
  cancel_at: string | null;
  shift_start: string | null;
  shift_end: string | null;
  break_start: string | null;
  break_end: string | null;
  breaks: any[];
}

export interface AllTimestamps {
  request_at: number | null;
  accept_at: number | null;
  pickup_at: number | null;
  dropoff_at: number | null;
  cancel_at: number | null;
  shift_start: number | null;
  shift_end: number | null;
  break_start: number | null;
  break_end: number | null;
  breaks: any[];
}

export interface Circumstances {
  is_pool: boolean;
  is_rush: boolean;
  is_surge: boolean;
  service_type: string;
  position: any;
}

export interface Location {
  lat: string;
  lng: string;
  formatted_address: string;
}

export interface Income {
  currency: string;
  total_charge: string | null;
  fees: string | null;
  total: string | null;
  pay: string | null;
  tips: string | null;
  bonus: string | null;
  taxes: string | null;
}

export interface IncomeRates {
  hour: string | null;
  mile: string | null;
}
