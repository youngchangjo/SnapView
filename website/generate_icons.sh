#!/bin/bash
mkdir -p assets/icons

# Common SVG header/footer
HEADER='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
FOOTER='</svg>'

# Helper to write SVG
write_svg() {
  echo "${HEADER}${2}${FOOTER}" > "assets/icons/${1}.svg"
}

# 1. Main View (square)
write_svg "view-main" '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>'

# 2. Grid View (square.grid.2x2) - Using paths for 4 squares
write_svg "view-grid" '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>'

# 3. Filmstrip View (rectangle.bottomthird.inset.filled)
# Outer rect, inner line
write_svg "view-filmstrip" '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M3 15h18" stroke-width="1"/><rect x="5" y="17" width="14" height="2" fill="currentColor" stroke="none"/>'

# 4. Manage View (rectangle.split.3x1) -> approximated as Layout
write_svg "view-manage" '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>'

# 5. Star Filled (star.fill)
write_svg "star-filled" '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor" stroke="none"></polygon>'

# 6. Star Slash (star.slash)
write_svg "star-slash" '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path><line x1="2" y1="2" x2="22" y2="22"></line>'

# 7. Pick (checkmark.circle.fill)
write_svg "pick" '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>'
# (Approximating fill with stroke for simplicity in line icon style, or use fill="currentColor" for solid)
echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>' > "assets/icons/pick.svg"

# 8. Reject (xmark.circle.fill)
echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>' > "assets/icons/reject.svg"

# 9. Unflag (flag.slash)
write_svg "unflag" '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line><line x1="2" y1="2" x2="22" y2="22"></line>'

# 10. Info (info.circle)
write_svg "info" '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>'

# 11. Quick Check (stethoscope -> heartbeat/activity for simpler recog)
write_svg "quickcheck" '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>'

# 12. Histogram (chart.xyaxis.line -> bar chart)
write_svg "histogram" '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>'

# 13. Compare (square.split.2x1)
write_svg "compare" '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="3" x2="12" y2="21"></line>'
