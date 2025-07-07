from datetime import datetime

mr_time = "2025-07-06T23:53:45.152058Z"
dt = datetime.strptime(mr_time, "%Y-%m-%dT%H:%M:%S.%fZ")

log_time = dt.timestamp()

print("Unix Epoch Format:", log_time)